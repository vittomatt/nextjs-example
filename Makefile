# Config
envs:
	docker-compose --file docker-compose.yml --env-file .env run nextjsexample env

app-shell:
	docker-compose --file docker-compose.yml --env-file .env run nextjsexample sh

# Images & Containers
# TODO: is a clean required?

build-dist:
	docker-compose --file docker-compose.yml --env-file .env run nextjsexample npm run build

build:
	docker-compose --file docker-compose.yml --env-file .env build

run:
	docker-compose --file docker-compose.yml --env-file .env up

run-tests:
	docker-compose --file docker-compose.yml --env-file .env run nextjsexample npm test

lint:
	docker-compose --file docker-compose.yml --env-file .env run nextjsexample npm run lint

watch-logs:
	docker-compose --file docker-compose.yml --env-file .env logs

stop:
	docker-compose --file docker-compose.yml --env-file .env stop

# It also removes the stopped containers as well as any networks that were created
down:
	docker-compose --file docker-compose.yml --env-file .env -v --remove-orphans down

remove:
	docker-compose --file docker-compose.yml --env-file .env --force --stop -v rm 

clean: stop down remove

init: clean build-dist build run
