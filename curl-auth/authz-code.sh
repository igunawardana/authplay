source env.sh
command=$AUTHZ_EP'?client_id='$CLIENT_ID'&scope='$SCOPE'&redirect_uri='$REDIRECT_URI'&response_type=code'

echo 
echo $command
echo
echo "====== 1. COPY PASTE ABOVE URL IN THE BROWSER"
echo "====== 2. LOGIN WITH CREDENTIAL"
echo "====== 3. GRANT THE PERMISSION"
echo "====== 4. GET THE VALUE OF CODE QUERY PARAM IN THE BROWSWER"
echo "====== 5. RUN THE BELOW COMMAND REPLACING THE CODE VALUE"
echo
echo "       $  export CODE={CODE_VALUE}"
echo
echo "====== 6. THEN RUN id-token.sh as below"
echo
echo "       $  ./id-token.sh"
echo
echo "====== 7. Access Token and Refressh Token will be in the reponse"
echo