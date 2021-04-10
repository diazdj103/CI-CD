 #!/bin/bash
branch=$(git rev-parse --abbrev-ref HEAD)
vagrant $branch up