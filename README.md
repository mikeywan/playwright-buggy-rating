# playwright-buggy-rating

Steps to run this framework:
1. Download and install nodejs from https://nodejs.org/en/download/
2. Clone this repo
   
   $git clone https://github.com/mikeywan/playwright-buggy-rating
   
   $git checkout master
   
   $git pull

3. Install playwright and devepencies from folder playwright-buggy-rating
   
   $npm install

4. Run ui regression test
   
   $npm run env:test:regression
   
5. View report
   
   $npx playwright show-report

6. CI support
   
   a. Install docker desktop from https://www.docker.com/products/docker-desktop
   
   b. Running following command to build and run ui image(within folder playwright-buggy-rating):
      
        $docker build -t buggy-rating-ui -f BuggyRating.Dockerfile .
      
        $docker run buggy-rating-ui 
  
