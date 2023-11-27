const { initializeApp, cert } = require('firebase-admin/app');
const admin = require("firebase-admin");

initializeApp({
    credential: admin.credential.cert({
      "type": "service_account",
      "project_id": "projeto-fatec-locadora",
      "private_key_id": "872918e36f5b462dcec58d5ab68271bc9333150f",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDN9/y7C+cI7ffr\nagJr8FLhakmle5t8IJP98l+nLkXy73aOOQTAJEL5PMACDVlo1w9ERN0/jkukfXcN\nFw06hJ/Vvt5s1QpxgCE/ZFvCZ5ek+VapPCimAM8IjdXPzWqDk9NoXTBFSo4OusLI\niaVLNtidXfA9ju9AmnWVUToa9rkTlKWWKBCahIoS2l2PNyRsr74B77Lj/X16KQFw\n19kRAzM4peKKqlP4bb7e3yKstzRx5h2zglkPx+DshUpzvy09cB1UpnZHBEF43Aon\nOzmFRRsWrvR3mZTZain+JJXAZYyZYKTlROQ2+7WSPKlzfNPRy/QyUpE3nnrE6saB\nPKmJYfzrAgMBAAECggEAAzZAzLHs0mjTmuo2S3Sd9kHwEBKTZCYl6Knk7/h6wsUV\nNjaRamWmXbiizeVjZY0lAc2JHbqcV15VgvC/FhCHZY/qbAwOc6Kp4hEwlSGEbeAt\nh8oWYDBXCi0cDneHl7GwdEovvITjHjuvWe07lKawThPu8SbPeFRwTPnNTCpYzINX\nwEo7un+epZCbfbY+Ezl2iEnyiKiLQjEjTbzUkCSDuUj5SkxhRStr2eu78yU2s08Q\nR6+tk+iimEp515hau8U+0A9dC1OMIJMwNNMxFEVTSbAGj/qAXdtSq1cvtCLozOE/\nettSRO9ULfnrta8nwUYVziOqXChCfh9Hve28qgg5cQKBgQDl725vIvs7UgnZkn+K\n9aZPF2TfkyUafi/bOCmUExa3Wt5Jw0jk1wuZmXiBiByI4vRSqGSDsazoZFRRd0U3\nmL6zFuTaRx6elaYtZ1/c2P1Bdvvqvqxm06lkIRXYHq3cE4doDvn6sJC8MjCxxACq\nhgmtcuTnGdHdNqBCqO80a9Cd9wKBgQDlUQ/LXaYT14ud9UTtw00gUyBpdSWO4tMz\nh00BHbdp4ZzemN9Jq3rwVQj6mQptTmCcw/z0B+I77p+nz1bPCWUexHmxXm8Kjzer\npnUvuDPr6AMhxK741DvhwIm4SmTLIKOK9qfP6TYXm6NXeKljzY1nQVB7kd79JaS5\npdWTO2drrQKBgQCTkCxUYKPQ9x5hJjZ6LJpVydKv9RPrw63cx1dPs0xx0Xw05IIE\ncsn8AlUm8/40D0rzPSR8q+smnTTLr3qZaoqADqJCP0A0UB/8pYoNBqjJeZ3Ekie8\nOfxMyTrmnxG+2j2dF3dwXh4U2TUM8Jfo1+qgCMtEUPqxOBxzi00wXDzfEwKBgAUP\nQs/z4wQxD02O6dRtKLh73Q02nnuGma5bX+GUbEWTyshGizau5+mBls8grVA4GH2c\n/WnM+rrjyvYC5yFuTaLeJuk48i5DdrD83T0OTWb5GYiXNF0dIa0beG5uhcbNk44v\nXwiBVsYykuoNKX+gO2x5znLLhyYCvJ20AQBcoS2JAoGBAJge4s64QTFYpxoyeqzR\nL1g3gNcRofqW1mLMyC6N/6oKHH/D+A2M3nkimLu6glh1oS/UWFhXkangjAHP7bKH\nqhAU0MAiCvGHXXRFb/F/2fE8MUjdXlXwqXJ8nbKtCdGQC3hSC0/VIRHIB9t03szg\nVRxS3wOafJhA1+iqjfzxN0sZ\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-wwxs7@projeto-fatec-locadora.iam.gserviceaccount.com",
      "client_id": "106535012489760577549",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wwxs7%40projeto-fatec-locadora.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    }),
    databaseURL: "https://projeto-fatec-locadora-default-rtdb.firebaseio.com"
});

const db = admin.database();
exports.db = db;
exports.admin = admin;
