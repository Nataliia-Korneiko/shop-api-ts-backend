import dotenv from 'dotenv';
dotenv.config();

const { DB_URI } = process.env;

export default {
  port: 1337,
  dbUri: DB_URI,
  origin: 'http://localhost:3000',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtLTfKvYWwM9euGRmqzRC0APy0
nrzmk7SXh8pIpUVZMQElMCqmYHFWZqJwYO95jZ1gkkbRaUsJVS9j2vAwy2pk9ugQ
8Sf3etITHbabaAR8TPgbxMM7qAxuAMcE3KlyfCmOmj8KmR7Jbzt5YXfyR7djQPh5
5nclIgjjSQGfVnjILwIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXwIBAAKBgQCtLTfKvYWwM9euGRmqzRC0APy0nrzmk7SXh8pIpUVZMQElMCqm
YHFWZqJwYO95jZ1gkkbRaUsJVS9j2vAwy2pk9ugQ8Sf3etITHbabaAR8TPgbxMM7
qAxuAMcE3KlyfCmOmj8KmR7Jbzt5YXfyR7djQPh55nclIgjjSQGfVnjILwIDAQAB
AoGBAKzgGfUDEwUeC63Zkrzl70myPpLUcADB7KLkRHQWwE7UU69bEQh7+EhnNrt2
mTk/vJ5eB+Ie+XA8oI1PTz12oyK0dbtDksML4doRI1hLMhTRUuQ3uPL/gbaJT+WV
BgrdUJTsiAH9v0yoeqhq1MyxfpKUCUCPchxEIxix/6w4Z4BJAkEA8yYLWNoT0HfY
qXWnAJvYsf15q6yyc7hB+E3FBn+6cgX1P6fglMGgPnEtgEB4Q0j2EniLXmdZKjOH
O7BltwiJ7QJBALZUaHymqDp48hBPbVxCV7AQOxcBcy0mSr0AgKTZU6p57Th/LujE
sHu7D0H393WCEsf82hNVmhGPWlF07yp+5wsCQQDoMzq+3XPyr6DvI/YaNLqaL9CT
y9aXgC0v7UTs0enBnkL5SV7FcKuRNhAX3Hl8+B5WwVuHCfcywAazT9+zDap5AkEA
s6w+QwfgI67nq1b6B76Atsln0WXmYAmqANIr80cOgaIhOFlsmoio+WT+xh1bR/rk
ExuCsybZ6o//iuHWhWQEvQJBALq+SR1e7csYW70VKXicnnNTzn9wevDvmuVTxfSG
//H/v/uewyT3FbD0mgbDOhl2esZ56DrYg4cSyMmQzKpyIyA=
-----END RSA PRIVATE KEY-----`,
};
