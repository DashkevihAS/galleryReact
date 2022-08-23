
fetch(`https://unsplash.com/oauth/token?client_id=RsAgvX7aIapnoALkfM5cAHXoNWhn1ujD6V-soXcFTQE&client_secret=131x1DILF_Lpoqf-z5xU9PTsYtU6f3Z1wCcul7scOTM&redirect_uri=http%3A%2F%2F192.168.100.4%3A3000%2F&code=${code}&grant_type=authorization_code`, {
  method: 'POST'
})
  .then(res => res.json())
  .then(data => console.log(data));
