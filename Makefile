# Config
envs:
	docker-compose --file docker-compose.yml --env-file .env run nextjs-example env

app-shell:
	docker-compose --file docker-compose.yml --env-file .env run nextjs-example sh

# Images & Containers
clean-dist:
	docker-compose --file docker-compose.yml --env-file .env run nextjs-example npm run clean

build-dist:
	docker-compose --file docker-compose.yml --env-file .env run nextjs-example npm run build

build:
	docker-compose --file docker-compose.yml --env-file .env build

run:
	docker-compose --file docker-compose.yml --env-file .env up

run-tests:
	docker-compose --file docker-compose.yml --env-file .env run nextjs-example npm test

lint:
	docker-compose --file docker-compose.yml --env-file .env run nextjs-example npm run lint

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

init: clean clean-dist build-dist build run
