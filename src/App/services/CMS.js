import { initializeApp, database } from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
}
initializeApp(config);

const data = database()
const PROFILE_REF = '/profile'
const EXPERIENCE_REF = '/experience'

export default class CMS {

  static get Profile () {
    return data.ref(PROFILE_REF).once('value').then((snap) => snap.val())
  }

  static get Experience () {
    return data.ref(EXPERIENCE_REF).once('value').then((snap) => snap.val())
  }



}