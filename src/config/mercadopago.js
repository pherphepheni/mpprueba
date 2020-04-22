import mercadopago from 'mercadopago';

const mp = mercadopago;
mp.configure({
    sandbox : true ,
    //access_token : 'TEST-5022580951038134-090402-8047c069b99e82936aac5058cabd481e__LB_LC__-226679895',
    clientId : '5022580951038134',
    clientSecret: 'sXISrDswEF6HpYoRY0HCb06NTJ0rjofK'
  })

  let preference = {
    items : [
        producto[0]
    ]
}

console.log(preference)

mp.preferences.create(preference)
.then(respuesta=>{
    global.init_point = respuesta.body.init_point;
})
.catch(error =>{
    console.log(error)
})