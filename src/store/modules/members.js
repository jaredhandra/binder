/* eslint-disable prefer-const */
import axios from 'axios';

const sheetsUrl = '';

const state = () => ({
  members: []
});

const getters = {

};

const actions = {
  getMembershipData({ commit }) {
    const members = [];
    axios.get(sheetsUrl)
      .then((response) => {
        const data = response.data.feed.entry;
        let rowIndex = 2;
        let member = {};
        for (let index = 0; index < data.length; index += 1) {
          if (rowIndex === Number(data[index].gs$cell.row)) {
            // still convinced i can use a switch here, need to come back to this
            const dataCol = data[index].gs$cell.col;
            if (dataCol === '1') {
              member.timestamp = data[index].content.$t;
            } else if (dataCol === '2') {
              member.name = data[index].content.$t;
            } else if (dataCol === '3') {
              member.renewingMember = data[index].content.$t;
            } else if (dataCol === '4') {
              member.email = data[index].content.$t;
              members.push(member);
              rowIndex += 1;
              member = {};
            }
          }
        }
        commit('SET_DATA', members);
      });
  }
};

const mutations = {
  SET_DATA(state, data) {
    state.members = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
