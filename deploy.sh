 #!/bin/bash
branch=branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo "Thies is the $branch branch" 
vagrant  up $branch