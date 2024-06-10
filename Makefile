build:
	docker build -t tablebot .

run:
	docker run -d -p 3000:3000 --name tablebot --rm tablebot
