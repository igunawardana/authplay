command="curl -k --user $CLIENT_ID:$CLIENT_SECRET  $TOKEN_EP -d  code=$CODE&grant_type=authorization_code&client_id=$CLIENT_ID&redirect_uri=$REDIRECT_URI"
echo "Executing the command..."
echo $command
echo
$command
echo 