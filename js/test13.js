
const express = require('express')
const app = express()
const port = 3000
const parser = require('xml2json-light'); 
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios')

let a, b, c, d;

const APIKEY = "dfGEh0ZxCmcCs9D3T70URlxTe77aM%2FAVq%2F47cZb2gRko%2BxANXozELIoiMtAp92ANXucyBoEzbHvcMOYSXzzgDw%3D%3D";
	const data_gettodaze = async () => {
	const dataget = await axios.get({
	  method : 'get',
	  url : 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson', 
		params: {
		  serviceKey: decodeURIComponent(APIKEY),
		  pageNo: 1,
		  numOfRows: 10,
		  startCreateDt: 20210916,
		  endCreateDt: 20210916
		}
	}).then(r => {
        // console.log(r.data.response.body.items.item);
        // console.log(typeof r.data.response.body.items.item);
        let json = parser.xml2json("<eds>test?</eds?>");
        console.log(json);
      
        // var obj = {
        //   name: 'myObj'
        // };
        
      a = JSON.stringify(r.data.response.body.items.item.decideCnt);
      b = JSON.stringify(r.data.response.body.items.item.clearCnt);
      c = JSON.stringify(r.data.response.body.items.item.deathCnt);
      d = JSON.stringify(r.data.response.body.items.item.examCnt);
      
        // console.log(r.data.response.body.items);
      
        // const $ = cheerio.load(r.data.response.body.items);
      
      
                    // xml to json
                
      
      });

	// console.log(dataget)
	return dataget;
}

data_gettodaze()