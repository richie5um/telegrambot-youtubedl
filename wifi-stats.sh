#!/bin/bash

declare -a URLS=("www.google.com" "www.bbc.co.uk" "www.example.com", "www.richsomerfield.com", "www.microsoft.com")

#while [[ true ]]; do
	for URL in "${URLS[@]}"
	do
		echo "********************************"
		echo `date`
		echo $URL

		curl "$URL" -s -L -o /dev/null -w \
		 "		response_code: %{http_code}
		dns_time: %{time_namelookup}
		connect_time: %{time_connect}
		pretransfer_time: %{time_pretransfer}
		starttransfer_time: %{time_starttransfer}
		total_time: %{time_total}\n"
	done
#	sleep 3600
#done
