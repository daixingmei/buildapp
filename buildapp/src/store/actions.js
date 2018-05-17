export default {
  ShowHeader: ({
    commit
  }) => {
    commit('ShowHeader')
  },
  HideHeader: ({
    commit
  }) => {
    commit('HideHeader')
  },
  ShowFooter: ({
    commit
  }) => {
    commit('ShowFooter')
  },
  HideFooter: ({
    commit
  }) => {
    commit('HideFooter')
  },
  loadingHide: ({
    commit
  }) => {
    commit('loadingHide')
  },
  loadingShow: ({
    commit
  }) => {
    commit('loadingShow')
  },
  UserName: ({
    commit
  }, res) => {
    commit('UserName', res)
  },
  getusername: ({
    commit
  }, res) => {
    commit('getusername', res)
  },
  getpassword: ({
    commit
  }, res) => {
    commit('getpassword', res)
  }
}
