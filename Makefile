DOCKER-COMPOSE_PATH:=./Docker/docker-compose.yml

all :
	docker compose -f $(DOCKER-COMPOSE_PATH) up -d

build :
	docker compose -f $(DOCKER-COMPOSE_PATH) build

fclean :
	docker compose -f $(DOCKER-COMPOSE_PATH) down
