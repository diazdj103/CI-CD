 #!/bin/bash
branch="environment"

function getSomeString {
 git rev-parse --abbrev-ref HEAD
}
getSomeString branch
echo "This is the $branch branch" 
vagrant  up $branch