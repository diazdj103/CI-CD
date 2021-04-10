 #!/bin/bash
branch=$(git rev-parse --abbrev-ref HEAD)
echo "Thies is the "; echo $branch; echo " branch" 
vagrant  up $branch