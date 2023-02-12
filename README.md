# kjell-delim
This is a project to create a tool for the SP´s at Kjell & Co that makes their lifes easier with their dailee tasks.

## Features
- Tool for divideing up priceadjustments from airtable to correct lengths of strings for inventory list
- Removing of duplicates
- Simple tutorial page

## Installation
### Requirements
- Docker
### How to
The program is made for installation in Docker. Download the zip from realeases and then extract it on the computer supposed to run the program.

Build the docker container using:
```bash
docker build -t coffedahl/kjell-delim .
```
After the container is built you can run it trough:
```bash
docker run --name kjell-delim coffedahl/kjell-delim
```
If you want to access the program on the host machine add the
```bash
-p 3000:3000
```
tag in the run command. then you will be able to acces the program on *localhost:3000*
