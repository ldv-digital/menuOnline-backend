up:
	docker-compose -f docker-compose.yml down && docker-compose -f docker-compose.yml up -d --remove-orphans

watch:
	docker-compose -f docker-compose.yml down && docker-compose -f docker-compose.yml up --remove-orphans	

stop:
	docker-compose -f docker-compose.yml stop

down:
	docker-compose -f docker-compose.yml down -v	

build:
	docker-compose -f docker-compose.yml down && docker-compose -f docker-compose.yml up -d --build --remove-orphans

docker-inspect:
	docker network inspect bridge

bash:
	docker exec -it nextjs sh

prisma-migrate:
	docker exec -it nextjs sh -c 'yarn  prisma migrate dev --name init'
	 
# Docker commands
remove-all-images-docker:
	docker network prune
	docker rm -vf $(docker ps -a -q); docker rmi -f $(docker images -a -q)
