
## Entities
### 1. Class
Represents a school class with the following attributes:
- `id` (integer)
- `className` (string)

### 2. Student
Represents a student with the following attributes:
- `id` (integer)
- `studentName` (string)
- `className` (string)


## Routes
### Class Routes
Base URL: `/classes`

|Method | Endpoint      | Request Body                        |
|-------|---------------|-------------------------------------|
|POST   |`/`            |`{ "className" : "class name" }`     |
|GET    |`/:id`         | None                                |
|PUT    |`/:id`         | `{ "className": "new class name" }` |
|DELETE |`/:id`         | None                                |

### Student Routes
Base URL: `/students`

|Method | Endpoint       | Request Body                                                             |
|-------|----------------|--------------------------------------------------------------------------|
|POST   |`/`             |`{ "id" : "student id", "studentName" : "name", "className": "name" }`    |
|PUT    |`/:id`          |`{ "id" : "new student id", "studentName" : "name", "className": "name" }`|
|DELETE |`/:id`          |                          None                                            |
|GET    |`/`             |                          None                                            |
|GET    |`/:id`          |                          None                                            |
|GET    |`/name/:studentName`|                      None                                            |
|GET    |`/class:className`  |                      None                                            |

## Running the API with Docker
You can download and run the pre-built Docker image of the School API directly from Docker Hub without cloning the code.

### Pull the Docker Image
1. Pull the image from Docker Hub: **[Docker Hub link](https://hub.docker.com/repository/docker/longhoangnuyenh/nodejs-practice/general)**
```shell
docker pull longhoangnuyenhnodejs-practice:1.0.4
```

### Run the Docker Container
1. Run the container and map the API's port to your local machine:
```shell
docker run -p 3000:3000 longhoangnuyenhnodejs-practice:1.0.4    
```
2. The API will now be accessible at:
```
http://localhost:3000
```