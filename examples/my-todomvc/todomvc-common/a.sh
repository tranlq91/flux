##!/bin/bash

## *********************** add nodejs ************************************************
##module='/usr/share/man/man1/module.1.gz'
##npm_version=`npm -v`
##if [ -z $npm_version ];
##then
##    $module avail node
##    echo "nodelist " "$node_version_list"
##fi

## ******************** Installing node module's dependencies *************************
function check_dependencies {
    if [ ! -d "node_modules" ];
    then
	echo "Installing node module's dependencies ..."
	npm install
    fi
}

## ******************** Kill old watcher  *********************************************
function kill_old_watcher {
   IFS=$'\n'
   processes=( $(ps -ef | grep run-ci | grep xterm) )
   for p in "${processes[@]}"; do
	IFS='  ' read -r -a array_to_be_killed <<< "$p"
	child_id="${array_to_be_killed[1]}"
	kill -9 "$child_id"
   done
}
## ******************** Kill all node processes ****************************************
function kill_all_node_processes {
   IFS=$'\n'
   processes=( $(ps -ef | grep nodemon) )
   for p in "${processes[@]}"; do
	IFS='  ' read -r -a array_to_be_killed <<< "$p"
	child_id="${array_to_be_killed[1]}"
	if ps -p $child_id > /dev/null
	then
	    kill  -9 "$child_id"
	fi
   done
}
check_dependencies
kill_old_watcher
kill_all_node_processes
while test "$1" ; do
	case $1 in
	    stop )
		echo "Stopping server and watcher..."
		shift
		;;
	    start )
		echo "Starting server and watcher..."
		xterm -T "CI-WATCHER" -e ./run-ci.sh  > /dev/null 2>&1 &
	esac
    shift
done
