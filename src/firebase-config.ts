import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDPKtITQ1r_xp2PCvcfGV_rDSmX613wlHk',
  authDomain: 'remote-study-school.firebaseapp.com',
  databaseURL: 'https://remote-study-school-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'remote-study-school',
  storageBucket: 'remote-study-school.appspot.com',
  messagingSenderId: '901401322505',
  appId: '1:901401322505:web:ba54377c509a63d36e84d8'
}
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)