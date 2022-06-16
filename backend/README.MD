## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the ready mode.\
Server would open on adress [http://localhost:5000](http://localhost:5000).

### `yarn run dev`

Runs the app in the development mode.\
Server would open on adress [http://localhost:5000](http://localhost:5000).

# Routes

# Auth

### POST `/auth/login`

Login
Returns User

## Body 

| Name | Type |
| --- | --- |
| email | String |
| password | String |

### POST `/auth/registration`

Create a new user
Returns User

## Body

| Name | Type |
| --- | --- |
| name | String |
| email | String |
| password | String |

# Profiles

### GET `/api/profiles`

Get All Profiles
Returns Profile[]

### GET `/api/profile/:user_id`

Get Profile by user id
Returns Profile

### GET `/api/profile/image/:user_id`

Get Profile image
Returns image

### POST `/api/profile`

Create Profile
Returns Profile

## Body

| Name | Type |
| --- | --- |
| user_id | Number |

### POST `/api/profile/:user_id`

Change Profile
Returns Profile

## Body

| Name | Type |
| --- | --- |
| name | String |
| email | String |

### PUT `/api/profile/image`

Change Profile image
Returns image

## Body

| Name | Type |
| --- | --- |
| user_id | Number |
| image | String |

### DELETE `/api/profile`

Delete profile
Returns message "Profile deleted"

## Body

| Name | Type |
| --- | --- |
| user_id | Number |

# Projects

### GET `/api/projects`

Get All Projects
Returns Project[]

### GET `/api/projects/:user_id`

Get All user's Projects
Returns Project[]

### GET `/api/project/:id`

Get Project by project id
Returns Project

### POST `/api/project`

Create a new project

Body:
> user_id - Number
> project - {
>> name - String
>> description - String
}
| Name | Type |
| --- | --- |
| user_id | Number |
| Project |
| name | String |
| description | String |

### DELETE `/project/:id`

Delete project by project id

# Users

### GET `/api/users`

Get All Users
Returns User[]

### GET `/api/users/:id`

Get User by id
Returns User

### POST `/api/users`

Create a new User
Returns User

Body:
> name - String
> email - String
> password - String

### DELETE `/api/users/:id`

Delete User by id
Returns message "User was deleted"
