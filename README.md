# Open-SP
This is a project to create a tool for the Service Points at Kjell & Co that makes their lifes easier with their daily tasks. The project is based on the expireices of sellers and how we can make things as efficent as possible with repetitive tasks.

## Features
- Tool for divideing up priceadjustments from airtable to correct lengths of strings for inventory list
- Removing of duplicates
- Shipment inventory, checking that shipments are correct
- Simple tutorial page
- Simple backend for storing data

## Installation
### Requirements
- Docker
#### Recommended
- Docker-Compose

### Docker-compose (complete setup)
This is a complete setup with networkig. This example uses SurrealDB and the code is written for it. If you want to use something else i want to refer to the build mehtod and write custom code. 

```yaml
version: "2"
networks:
  open-sp:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 10.5.0.0/24
          gateway: 10.5.0.1
services:
  frontend:
    container_name: open-sp_frontend
    image: coffedahl/open_sp:frontend
    ports:
      - 3000:3000
    networks:
      open-sp:
        ipv4_address: 10.5.0.5
  backend:
    container_name: open-sp_backend
    image: coffedahl/open_sp:backend
    ports:
      - 8080:8080
    networks:
      open-sp:
        ipv4_address: 10.5.0.6
  db:
    image: surrealdb/surrealdb:latest
    container_name: open-sp_database
    restart: always
    command: start --user {username} --pass {password} file:/data/database.db
    ports:
      - 8000:8000
    networks:
      open-sp:
        ipv4_address: 10.5.0.7
    volumes:
      - {/path/to/data}:/data
```

### Build method
Download and exctract the Zip-file from the latest release.
