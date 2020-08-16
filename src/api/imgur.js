import qs from 'qs'
import axios from 'axios'

const CLIENT_ID = '60b9193de43cbb4'
const BASE_URL = 'https://api.imgur.com'

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token',
    }
    window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`
  },
  fetchImages(token) {
    return axios.get(`${BASE_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData()
      formData.append('image', image)

      return axios.post(`${BASE_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    })

    return Promise.all(promises)
  },
}

//clientId: 60b9193de43cbb4
//client secret: 842601a74ae3e8f5e15b2480f69ee507cd5e2ca4
