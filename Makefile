DOCKER_COMPOSE_DIR:=./Docker
DOCKER_COMPOSE_FILE:=$(DOCKER_COMPOSE_DIR)/docker-compose.yml
IMAGE:=nginx:web-page

all :
	docker compose -f $(DOCKER_COMPOSE_FILE) up -d

build : rm_image
	docker compose -f $(DOCKER_COMPOSE_FILE) build

logs :
	cd $(DOCKER_COMPOSE_DIR) && docker compose logs -f

rm_image : fclean
	@if [ -n "$(shell docker images | grep web-page)" ]; then \
		docker rmi -f $(IMAGE); \
	else \
		echo no images; \
	fi

fclean :
	docker compose -f $(DOCKER_COMPOSE_FILE) down

.PHONY : all build logs rm_image fclean