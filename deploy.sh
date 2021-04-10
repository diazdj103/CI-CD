 #!/bin/bash
branch= "git rev-parse --abbrev-ref HEAD"
echo "This is the $branch branch" 
vagrant  up $branch