#!/bin/bash
# execute script A
node ./utils/db_product_sync_init.js
node ./utils/db_unwind.js
node ./utils/db_sync_log.js