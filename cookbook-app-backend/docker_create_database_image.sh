docker create --name cookbook_app -p 5432:5432 --net=profile -e POSTGRES_PASSWORD=$BRAINY_PROFILE_DB_PASSWORD -e POSTGRES_USER=$BRAINY_PROFILE_DB_USER -e POSTGRES_DB=cookbook_db postgres