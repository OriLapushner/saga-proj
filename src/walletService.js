import axios from 'axios'
const BASEURL = 'http://interview-api.saga.org/api/v1/users/me/wallets'

var getOptions = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzRlNmY3YS1mYjI3LTQ4OGUtODFmMC1kY2M2ZTRjOWRmZGMiLCJtb3JlRGF0YSI6Int9Iiwicm9sZXMiOlsibWVtYmVyIl0sInR5cGUiOiJFWFBJUkVfT05MWSIsImV4cCI6MTUzNDY4MDExNSwianRpIjoiMDQ0MDYwYmItYTVmMi00ZGY2LTk1MTUtM2VlZTBkNDdiYzU4In0.NeUwsrF3yQJsXM1-NdIUe-AodmrPGKj_zV-FZDxojAw',
        'Content-Type': 'application/json',
        'Origin':'www.blabla.com'
    },
    json: true
  };
  function getWallets(){
    return axios.get(BASEURL,getOptions)
    .catch(err => {
        console.log(err)
    })
  }
  function addWallet(walletName){
      axios.post(BASEURL,{
        method: 'POST',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzRlNmY3YS1mYjI3LTQ4OGUtODFmMC1kY2M2ZTRjOWRmZGMiLCJtb3JlRGF0YSI6Int9Iiwicm9sZXMiOlsibWVtYmVyIl0sInR5cGUiOiJFWFBJUkVfT05MWSIsImV4cCI6MTUzNDY4MDExNSwianRpIjoiMDQ0MDYwYmItYTVmMi00ZGY2LTk1MTUtM2VlZTBkNDdiYzU4In0.NeUwsrF3yQJsXM1-NdIUe-AodmrPGKj_zV-FZDxojAw',
            'Content-Type': 'application/json',
            'Origin':'www.blabla.com'
        },
        data:{
            name:'assss',
            publicKey: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            colorValidator:"ssssssssssssssssssssssssssssssssssssssss"
        },
        json: true
      })
  }
  export default {
      getWallets,
      addWallet
  }