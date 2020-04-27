source env.sh
command=$AUTHZ_EP'?client_id='$CLIENT_ID'&scope='$SCOPE'&redirect_uri='$REDIRECT_URI'&response_type=code'

echo $command