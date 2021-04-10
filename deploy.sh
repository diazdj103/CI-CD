 #!/bin/bash


function getSomeString {
      env -i
      branch= echo git rev-parse --abbrev-ref HEAD
}
 
echo "This is the $branch branch" 
#vagrant  up $result