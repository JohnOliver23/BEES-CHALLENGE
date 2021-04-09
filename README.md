# BEES CHALLENGE

This is a test for a Front-End developer position at Bees Brasil.

## Run the project
1. git clone https://github.com/JohnOliver23/BEES-CHALLENGE.git
2. cd BEES-CHALLENGE/
3. yarn install
4. yarn start

## Backend
- for the backend, a **CMS** was made in prismic that returns a list of beers on the route **/ beers**
![Cms](https://github.com/JohnOliver23/BEES-CHALLENGE/blob/main/images/cms.png?raw=true)


# Pages
### Home: 

- The home page consists of a list of beers
- In desktop resolution the list is composed by 4 tiles
- In tablet resolution the list is composed by 2 tiles
- In mobile resolution the list is composed by a single tile

#### Desktop
![Desktop](https://github.com/JohnOliver23/BEES-CHALLENGE/blob/main/images/desktop.png?raw=true)


#### Tablet
![Tablet](https://github.com/JohnOliver23/BEES-CHALLENGE/blob/main/images/tablet.png?raw=true)

#### Mobile
![Mobile](https://github.com/JohnOliver23/BEES-CHALLENGE/blob/main/images/mobile.png?raw=true)

#### Actions
- The user should be able to re-order the tiles by **Lowest Price**, **Biggest Price** and **Product Name** 
- The user can drag to move the tiles

# Tests
## Run the tests
1. yarn test : to run the tests
2. yarn test:coverage : to generate the test report
3. cd coverage/lcov-report/index.html : to see the test report

![Tests](https://github.com/JohnOliver23/BEES-CHALLENGE/blob/main/images/tests.png?raw=true)



## Technologies:
- Typescript
- HTML
- CSS

## Framework
### React FC with hooks
- useState and useReducer for state control
- useEffect for lifecicle control

## Libraries
- Styled components
- Prismic
- React Router DOM
- React icons
- React-sortable-hoc


