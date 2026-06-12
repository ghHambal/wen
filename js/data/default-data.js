    // Default Mock Data in case Supabase tables do not exist yet
    const defaultTeachers = [
  {
    "id": "admin",
    "name": "แอดมินฝ่ายปกครอง",
    "role": "admin",
    "phone": "0811111100",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "chief",
    "name": "หัวหน้าเวรใหญ่",
    "role": "chief",
    "phone": "0822222200",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "director",
    "name": "ดร.มูฮัมหมัด ซากี",
    "role": "director",
    "phone": "0833333300",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1087",
    "name": "KruHambaleeWaji",
    "role": "head",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2001",
    "name": "MR.MHD ADAM IBRAHIM",
    "role": "teacher",
    "phone": "0802653414",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2002",
    "name": "กาญจนา โต๊ะยะลา",
    "role": "teacher",
    "phone": "0614682981",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1003",
    "name": "กาญจนา สาซู",
    "role": "teacher",
    "phone": "0928312878",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1007",
    "name": "กูรัยนี นินาวา",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1012",
    "name": "ซอฟียะห์ ดอเลาะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2087",
    "name": "นาง ปาสียะห์ สาและ",
    "role": "teacher",
    "phone": "0986970151",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1001",
    "name": "นางกอมารีเยาะ เส็นสะนา",
    "role": "teacher",
    "phone": "0980615045",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1006",
    "name": "นางกูดาเรีย อับดุลวาฮับ",
    "role": "teacher",
    "phone": "0892985362",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2004",
    "name": "นางขอซีหน๊ะ ลาเต๊ะมูหะมะ",
    "role": "teacher",
    "phone": "0927721693",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1008",
    "name": "นางคอลีเยาะห์ มอลอ",
    "role": "teacher",
    "phone": "0807105142",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1010",
    "name": "นางจุฑารัตน์  ดอเลาะ",
    "role": "teacher",
    "phone": "0661571899",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1011",
    "name": "นางซอบารียะห์ ปะจู",
    "role": "teacher",
    "phone": "0874326506",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1018",
    "name": "นางซูรีนา เจ๊ะมิง",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2022",
    "name": "นางนูซียะ มะลี",
    "role": "teacher",
    "phone": "0812778427",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1038",
    "name": "นางนูรีมัน ยูโซะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2027",
    "name": "นางปาสียะห์ สาและ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1047",
    "name": "นางมัซนี บือแน",
    "role": "teacher",
    "phone": "0611753312",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1050",
    "name": "นางมารียานี แวนาแซ",
    "role": "teacher",
    "phone": "0831924035",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2036",
    "name": "นางมีรีแย ยีหวัง",
    "role": "teacher",
    "phone": "0848563141",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1059",
    "name": "นางโรหะนี  เลาะดีเยาะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1061",
    "name": "นางลาตีปะ เสะบิง",
    "role": "teacher",
    "phone": "0980265416",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1063",
    "name": "นางลียานา  สะมะแอ",
    "role": "teacher",
    "phone": "0897323712",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2053",
    "name": "นางแวอามีเนาะ   แวและ",
    "role": "teacher",
    "phone": "0899786430",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1067",
    "name": "นางสารีปะห์  ยูโซะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1109",
    "name": "นางสาว ตัสนีม",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1110",
    "name": "นางสาว ฮัสนี เจะสะมะ",
    "role": "teacher",
    "phone": "0873973189",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1002",
    "name": "นางสาวกัสมา เด็นมูณี",
    "role": "teacher",
    "phone": "0898087933",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2003",
    "name": "นางสาวกามารียะ มะแซ",
    "role": "teacher",
    "phone": "0829386919",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1004",
    "name": "นางสาวกามารีเยาะ มะมิง",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1005",
    "name": "นางสาวการีม๊ะ สาเหาะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2005",
    "name": "นางสาวคอดีเยาะ สาหลำ",
    "role": "teacher",
    "phone": "0937451487",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2006",
    "name": "นางสาวเจะรอสียะห์ ปาโห๊ะ",
    "role": "teacher",
    "phone": "0887994776",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1086",
    "name": "นางสาวชนิณี กาเดร์",
    "role": "teacher",
    "phone": "0989485174",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1013",
    "name": "นางสาวซารีนา ยูโซะ",
    "role": "teacher",
    "phone": "0980477513",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1014",
    "name": "นางสาวซารียะ บาเหม",
    "role": "teacher",
    "phone": "0862844859",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1015",
    "name": "นางสาวซิครอ ยูโซ๊ะ",
    "role": "teacher",
    "phone": "0659132083",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2011",
    "name": "นางสาวซีฮาม เจะยามา",
    "role": "teacher",
    "phone": "0850791345",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1017",
    "name": "นางสาวซูรอหะนี แดบอ",
    "role": "teacher",
    "phone": "0937347820",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2012",
    "name": "นางสาวไซด๊ะ ตาเละ",
    "role": "teacher",
    "phone": "0848623955",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1019",
    "name": "นางสาวดาลีลาอ์  กรียอ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1022",
    "name": "นางสาวต่วนโรสนียา ต่วนบือซา",
    "role": "teacher",
    "phone": "0924274792",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1023",
    "name": "นางสาวตอฮีเราะห์ หะยีแวสะแลแม",
    "role": "teacher",
    "phone": "0847473781",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1025",
    "name": "นางสาวตัสนีม กาลาแต",
    "role": "teacher",
    "phone": "0962262976",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1024",
    "name": "นางสาวตัสนีม มะมิง",
    "role": "teacher",
    "phone": "0848606626",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2051",
    "name": "นางสาวนาซูฮา สาและ",
    "role": "teacher",
    "phone": "0926856795",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1028",
    "name": "นางสาวนาบีล๊ะ สาเมาะบาซา",
    "role": "teacher",
    "phone": "0872973446",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1030",
    "name": "นางสาวนาวาล กะจิ",
    "role": "teacher",
    "phone": "0883947995",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2019",
    "name": "นางสาวนาวาล เคดาร์",
    "role": "teacher",
    "phone": "0836542287",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1031",
    "name": "นางสาวนาอีหม๊ะ เฮ็งปิยา",
    "role": "teacher",
    "phone": "0831852893",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1032",
    "name": "นางสาวนิสรีน สาแลหมัน",
    "role": "teacher",
    "phone": "0804501893",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2021",
    "name": "นางสาวนุรริย๊ะ ดอมะ",
    "role": "teacher",
    "phone": "0926280474",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2085",
    "name": "นางสาวนูรมี หะนิมะ",
    "role": "teacher",
    "phone": "0981458750",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1034",
    "name": "นางสาวนูรไอนี หะยีเลาะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1035",
    "name": "นางสาวนูรฮูดา หะยีเลาะ",
    "role": "teacher",
    "phone": "0958431240",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1036",
    "name": "นางสาวนูรีซัน อีซอ",
    "role": "teacher",
    "phone": "0650681927",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1099",
    "name": "นางสาวนูรีซา เจะแม",
    "role": "teacher",
    "phone": "0955246721",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1037",
    "name": "นางสาวนูรีซา ดาหมิ",
    "role": "teacher",
    "phone": "0828295814",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1040",
    "name": "นางสาวปาตีเมาะ สาเด๊ะ",
    "role": "teacher",
    "phone": "0862986878",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1041",
    "name": "นางสาวฟาดีละห์ เหมาะจะโรจน์",
    "role": "teacher",
    "phone": "0623795161",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1043",
    "name": "นางสาวฟาติน ดอเลาะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2025",
    "name": "นางสาวฟาตีเมาะ เจะเตะ",
    "role": "teacher",
    "phone": "0936726250",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1044",
    "name": "นางสาวฟาตีฮะ วาจิ",
    "role": "teacher",
    "phone": "0611023061",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1045",
    "name": "นางสาวฟิตรียา แวเด็ง",
    "role": "teacher",
    "phone": "0950265821",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1048",
    "name": "นางสาวมัยมูนะห์ ตาเยะ",
    "role": "teacher",
    "phone": "0878995618",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1049",
    "name": "นางสาวมัรกะ แวอาแซ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1051",
    "name": "นางสาวมีรฟัต จูแซ",
    "role": "teacher",
    "phone": "0987438529",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1096",
    "name": "นางสาวไมมูนะห์ สาและ",
    "role": "teacher",
    "phone": "0937712650",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2043",
    "name": "นางสาวยาวาเฮร์ แวสามะ",
    "role": "teacher",
    "phone": "0926368700",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2047",
    "name": "นางสาวรอวียะห์ อาเยาะแซ",
    "role": "teacher",
    "phone": "0808739341",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1092",
    "name": "นางสาวรัชฎาภรณ์ ลายพรหม",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1057",
    "name": "นางสาวรุสดา ดอเลาะเซาะ",
    "role": "teacher",
    "phone": "0987039943",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2050",
    "name": "นางสาวรุสลีณีย์ ลาเตะ",
    "role": "teacher",
    "phone": "0971169370",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1058",
    "name": "นางสาวรูไซนี ดือรามะ",
    "role": "teacher",
    "phone": "0937858482",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1062",
    "name": "นางสาวลาตีฟะห์ วาเยะ",
    "role": "teacher",
    "phone": "0908815915",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2054",
    "name": "นางสาวแวฮาซือนะ แวดาโอะ",
    "role": "teacher",
    "phone": "0643370453",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1066",
    "name": "นางสาวสารีด๊ะ หะยีมาซอ",
    "role": "teacher",
    "phone": "0856704872",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1068",
    "name": "นางสาวสารียา สาหลำ",
    "role": "teacher",
    "phone": "0808638360",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1071",
    "name": "นางสาวสุไรยา มะมิง",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1073",
    "name": "นางสาวสูไฮลา โตะวี",
    "role": "teacher",
    "phone": "0828345128",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1077",
    "name": "นางสาวอัญญารัตน์ ชาจิตะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1082",
    "name": "นางสาวอัลฟาตีฮะห์ ฮะซา",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1084",
    "name": "นางสาวอานีซ๊ะ ซูและ",
    "role": "teacher",
    "phone": "0806676621",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1085",
    "name": "นางสาวอานีซะ นาแว",
    "role": "teacher",
    "phone": "0808408737",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1093",
    "name": "นางสาวอาฟีฟะห์ ดอเลาะ",
    "role": "teacher",
    "phone": "0660126701",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2074",
    "name": "นางสาวอาอีดะห์ กาเจ",
    "role": "teacher",
    "phone": "0807170789",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1088",
    "name": "นางสาวฮัสนี เจะสะมะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2068",
    "name": "นางสาวฮาซียะ มะลี",
    "role": "teacher",
    "phone": "0892284260",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1089",
    "name": "นางสาวฮาซือนะห์  สะมะแอ",
    "role": "teacher",
    "phone": "0843977787",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1090",
    "name": "นางสาวฮายาตี อาแว",
    "role": "teacher",
    "phone": "0895961613",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1091",
    "name": "นางสาวฮาริซา เคดาร์",
    "role": "teacher",
    "phone": "0980139557",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1069",
    "name": "นางสุดารัตน์ เลขานุกิจ",
    "role": "teacher",
    "phone": "0654088827",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1070",
    "name": "นางสุริยา ศรีสุภาสิตานนท์",
    "role": "teacher",
    "phone": "0894623352",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1072",
    "name": "นางสุวิมล กุลชมภู",
    "role": "teacher",
    "phone": "0807101608",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1076",
    "name": "นางอนุสรา ขุนริทธ์",
    "role": "teacher",
    "phone": "0892365446",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1083",
    "name": "นางอัสลีนา สะอิด",
    "role": "teacher",
    "phone": "0822657617",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2073",
    "name": "นางอาอีซ๊ะ แวกีจิ",
    "role": "teacher",
    "phone": "0966917307",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2080",
    "name": "นางฮายาตี ดือราแม",
    "role": "teacher",
    "phone": "0653924201",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1102",
    "name": "นาย Demo",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2086",
    "name": "นายกมูฮัมหมัดอารีเฟ็น เปาะโน",
    "role": "teacher",
    "phone": "0831312897",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1095",
    "name": "นายครูสอนดี รักเด็ก",
    "role": "teacher",
    "phone": "0987654321",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1009",
    "name": "นายโฆษิทร์ บิลละโสย",
    "role": "teacher",
    "phone": "0819782466",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2007",
    "name": "นายเจะสู เจะหะ",
    "role": "teacher",
    "phone": "0807073484",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2008",
    "name": "นายเจ๊ะฮาเซ็น เจะปอ",
    "role": "teacher",
    "phone": "0654184407",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2009",
    "name": "นายซอบรี จานะ",
    "role": "teacher",
    "phone": "0814784059",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1016",
    "name": "นายซุห์ดี สาและ",
    "role": "teacher",
    "phone": "0817679216",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2013",
    "name": "นายไซดิง  เจ๊ะเลง",
    "role": "teacher",
    "phone": "0897364065",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2014",
    "name": "นายดนรอศักดิ์ จะโรจน์หวัง",
    "role": "teacher",
    "phone": "0928741778",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2015",
    "name": "นายดานิยา แวเด็ง",
    "role": "teacher",
    "phone": "0950303652",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1020",
    "name": "นายดาเล็ง สาหลำ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1021",
    "name": "นายดีนัร สาฮะ",
    "role": "teacher",
    "phone": "0611643545",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2016",
    "name": "นายโดรอแม เจะเหมาะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2017",
    "name": "นายตาร์มิซี เมาตี",
    "role": "teacher",
    "phone": "0862864789",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1026",
    "name": "นายตูวันอับดุลเลาะห์ ตุวันหะยี",
    "role": "teacher",
    "phone": "0931757970",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2018",
    "name": "นายนัทธีร์ หะยีเต๊ะ",
    "role": "teacher",
    "phone": "0934491503",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1027",
    "name": "นายนัสรี บินรัตแก้ว",
    "role": "teacher",
    "phone": "0869616456",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2061",
    "name": "นายนิมิตร เจะยามา",
    "role": "teacher",
    "phone": "0945354344",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1033",
    "name": "นายนูรดีน เสนสะนา",
    "role": "teacher",
    "phone": "0612160171",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2023",
    "name": "นายนูรุดิง ดือราแม",
    "role": "teacher",
    "phone": "0980296573",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1039",
    "name": "นายปาดิล เจะเลง",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2026",
    "name": "นายเปาซี แมเราะ",
    "role": "teacher",
    "phone": "0862919171",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1042",
    "name": "นายฟาเดล อับดุลวาฮับ",
    "role": "teacher",
    "phone": "0898708010",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2028",
    "name": "นายมะแซ ดอเลาะ",
    "role": "teacher",
    "phone": "0876331136",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2029",
    "name": "นายมะนาเซ แยนา",
    "role": "teacher",
    "phone": "0860463077",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2030",
    "name": "นายมะนาเซ สาและ",
    "role": "teacher",
    "phone": "0929317573",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2031",
    "name": "นายมะมือลี หะยีมะมิง",
    "role": "teacher",
    "phone": "0869619865",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2032",
    "name": "นายมะรอนิง มอลอ",
    "role": "teacher",
    "phone": "0872961282",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2033",
    "name": "นายมะสารี อาลีมามะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1046",
    "name": "นายมะหามะสะปูดิง อาแว",
    "role": "teacher",
    "phone": "0844075660",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2034",
    "name": "นายมังโซ หะยีบากา",
    "role": "teacher",
    "phone": "0659633178",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1052",
    "name": "นายมุกตาร์ เจ๊ะมูเก็ง",
    "role": "teacher",
    "phone": "0810952985",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2037",
    "name": "นายมูหมัด เจะและ",
    "role": "teacher",
    "phone": "0642980507",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1053",
    "name": "นายมูฮัมมัดกาแมล สาแลหมัน",
    "role": "teacher",
    "phone": "0937264202",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2040",
    "name": "นายมูฮัมมัดเปาซี ลาเต๊ะมูหะมะ",
    "role": "teacher",
    "phone": "0869622823",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2041",
    "name": "นายมูฮัมหมัดอิกบัล แวเด็ง",
    "role": "teacher",
    "phone": "0643401891",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2042",
    "name": "นายมูฮำมมัดเปาซี แวซู",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2044",
    "name": "นายยูโซะ จารง",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2045",
    "name": "นายยูโซะ ใบหมัด",
    "role": "teacher",
    "phone": "0980455881",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2046",
    "name": "นายรอย๊ะ หวันโส๊ะ",
    "role": "teacher",
    "phone": "0896549496",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2048",
    "name": "นายรอสดี จานะ",
    "role": "teacher",
    "phone": "0869568984",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2049",
    "name": "นายรุสลี มะยะอิง",
    "role": "teacher",
    "phone": "0656476342",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1060",
    "name": "นายฤทธิเกียรติ หะยีวามิส",
    "role": "teacher",
    "phone": "0635940689",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1064",
    "name": "นายวินัย บินสือนิ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2052",
    "name": "นายแวอับดุลรอเฮม เจะหะมะ",
    "role": "teacher",
    "phone": "0876321126",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1065",
    "name": "นายศราวุธ เส็นสะนา",
    "role": "teacher",
    "phone": "0612289885",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2055",
    "name": "นายสาปียัน มะเสาะ",
    "role": "teacher",
    "phone": "0961320156",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2056",
    "name": "นายสาฮูดี บือราเฮง",
    "role": "teacher",
    "phone": "0992105390",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2058",
    "name": "นายหัซมาน มอลอ",
    "role": "teacher",
    "phone": "0846912951",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2059",
    "name": "นายหามะ สือแม",
    "role": "teacher",
    "phone": "0984963001",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1074",
    "name": "นายอดินันท์  สะอิด",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1075",
    "name": "นายอดิศักดิ์ ตาเยะ",
    "role": "teacher",
    "phone": "0871394027",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2060",
    "name": "นายอะห์มัด มูฮำหมัด",
    "role": "teacher",
    "phone": "0815183756",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1080",
    "name": "นายอับดลอารีด เดชอรัญ",
    "role": "teacher",
    "phone": "0813889706",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1078",
    "name": "นายอับดุลการีม สาหลำ",
    "role": "teacher",
    "phone": "0894683530",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2063",
    "name": "นายอับดุลมุตอเละ โตะมิง",
    "role": "teacher",
    "phone": "0656580331",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2064",
    "name": "นายอับดุลยาเลล หมะอุเส็น",
    "role": "teacher",
    "phone": "0819699712",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2065",
    "name": "นายอับดุลรอเซด โตะมิง",
    "role": "teacher",
    "phone": "0806131207",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2083",
    "name": "นายอับดุลรอฟาร์ ตาเยะ",
    "role": "teacher",
    "phone": "0993456784",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1079",
    "name": "นายอับดุลรอมัน เส็นสะนา",
    "role": "teacher",
    "phone": "0898799392",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2066",
    "name": "นายอับดุลเลาะ เจะเฮาะ",
    "role": "teacher",
    "phone": "0827788684",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1081",
    "name": "นายอัมราม บอสู",
    "role": "teacher",
    "phone": "0862885962",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2067",
    "name": "นายอัศมาน มูซอ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2069",
    "name": "นายอามัน สะตาปอ",
    "role": "teacher",
    "phone": "0981172232",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2070",
    "name": "นายอามาน เจ๊ะหะมะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2071",
    "name": "นายอามีนูลเลาะห์ อาลี",
    "role": "teacher",
    "phone": "0892890155",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2072",
    "name": "นายอาหามะ เจ๊ะอะ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2075",
    "name": "นายอิบรอฮิม อาดำ",
    "role": "teacher",
    "phone": "0803468066",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2077",
    "name": "นายอิสมาแอ มาหะ",
    "role": "teacher",
    "phone": "0817039366",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2076",
    "name": "นายอีลฮัม ลาแซ",
    "role": "teacher",
    "phone": "0936906052",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2078",
    "name": "นายอุสมาน แวนาแว",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2081",
    "name": "นายฮาลูมิง มะเสาะ",
    "role": "teacher",
    "phone": "0810996457",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1029",
    "name": "นารมา ณะมะลายู",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2024",
    "name": "ปาอีซ๊ะ ดือราแม",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2035",
    "name": "มานาล ศรีริกานนท์",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2039",
    "name": "มาหามะลุตพี เมซา",
    "role": "teacher",
    "phone": "0800357646",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "1056",
    "name": "รีฮาม อับดุลวาฮับ",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2010",
    "name": "สีตีมาเรียม เมซา",
    "role": "teacher",
    "phone": "0833996635",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2057",
    "name": "สุไมยะห์ บินรัตแก้ว",
    "role": "teacher",
    "phone": "0930313729",
    "signature": null,
    "password": "1234"
  },
  {
    "id": "2062",
    "name": "อัดสนะ เจ๊ะแต",
    "role": "teacher",
    "phone": "0800000000",
    "signature": null,
    "password": "1234"
  }
]

    const defaultDutyPoints = [
      { id: 1,  name: 'ประจำประตูกับอาแซ', time: '08:00-09:00', lat: 6.78768, lng: 101.40812, radius: 50, assignedTo: ['1065'] },
      { id: 2,  name: 'ประจำโตะปิงปอง', time: '08:00-09:15', lat: 6.7878, lng: 101.4082, radius: 40, assignedTo: ['1026', '2040'] },
      { id: 3,  name: 'ลงแถวจัดระเบียบแถว ตรวจเครื่องแบบ (ปวช/สามัญ)', time: '07:50-08:20', lat: 6.7875, lng: 101.40805, radius: 50, assignedTo: ['1027', '2059', '1087', '2018', '2083'] },
      { id: 4,  name: 'อาคาร 5-6 และปิดประตู เร่งนักเรียนเข้าแถว', time: '07:55-08:20', lat: 6.7876, lng: 101.4083, radius: 40, assignedTo: ['2061'] },
      { id: 5,  name: 'อาคาร 5 เร่งนักเรียนเข้าแถว', time: '07:50-08:20', lat: 6.7877, lng: 101.4084, radius: 40, assignedTo: ['2023'] },
      { id: 6,  name: 'คาบแรกอาคาร 5 เร่งนักเรียนเข้าเรียน', time: '08:20-08:40', lat: 6.7877, lng: 101.4084, radius: 40, assignedTo: ['2083', '2018'] },
      { id: 7,  name: 'ลาดตระเวน คาบ 3', time: '10:00-10:45', lat: 6.788, lng: 101.4086, radius: 60, assignedTo: ['2056', '1074'] },
      { id: 8,  name: 'ลาดตระเวน คาบ 4', time: '10:45-11:30', lat: 6.788, lng: 101.4086, radius: 60, assignedTo: ['2059', '1026'] },
      { id: 9,  name: 'ก่อนหมดคาบ 5 ตรวจตรานักเรียนหนีลงเขาโรงอาหาร', time: '11:50-12:15', lat: 6.7879, lng: 101.4085, radius: 50, assignedTo: ['2018', '1074'] },
      { id: 10,  name: 'บริเวณโตะปิงปองถึงประตูใหญ่ ตรวจตรานักเรียนหนีกลับบ้าน (คาบ 5)', time: '11:45-12:10', lat: 6.7878, lng: 101.4082, radius: 50, assignedTo: ['1079'] },
      { id: 11,  name: 'บริเวณโตะปิงปองถึงประตูใหญ่ ตรวจตรานักเรียนหนีกลับบ้าน (คาบ 6)', time: '12:15-13:00', lat: 6.7878, lng: 101.4082, radius: 50, assignedTo: ['1065'] },
      { id: 12,  name: 'ประจำมูซอลลา/มัสยิด เป็นอีม่ามและจัดระเบียบการละหมาดของนักเรียน', time: '12:15-13:10', lat: 6.7882, lng: 101.4088, radius: 60, assignedTo: ['2061', '2059', '1087', '2056', '2023', '1027'] },
      { id: 13,  name: 'ลาดตระเวณคาบ 7 (เน้นหน้าห้องน้ำโรงยิมและห้องน้ำใกล้มูซอลลา/มัสยิด)', time: '13:55-14:40', lat: 6.7881, lng: 101.4087, radius: 60, assignedTo: ['1079', '1026'] },
      { id: 14,  name: 'ลาดตระเวณคาบ 8', time: '14:40-15:40', lat: 6.788, lng: 101.4086, radius: 60, assignedTo: [] },
      { id: 15,  name: 'ช่องแตเบาแลกเอกสาร ตรวจตรานักเรียนหนีกลับบ้านก่อนหมดคาบ 9', time: '15:40-16:10', lat: 6.78765, lng: 101.40815, radius: 50, assignedTo: ['2040'] },
      { id: 16,  name: 'บริเวณทิจอตรถมอเตอร์ไซด์ชาย', time: '15:40-16:10', lat: 6.7874, lng: 101.4079, radius: 50, assignedTo: ['1102'] },
      { id: 17,  name: 'บริเวณหน้าห้องพักอุสตาสหน้าโรงยิม ตรวจตรานักเรียนหนีกลับบ้านก่อนหมดคาบ 9', time: '15:40-16:10', lat: 6.7883, lng: 101.409, radius: 50, assignedTo: ['1087'] },
      { id: 18,  name: 'บริเวณส่วนก สวนเกษตรทางลงนักเรียนหนีกลับบ้านก่อนหมดคาบ', time: '15:40-16:10', lat: 6.7872, lng: 101.4078, radius: 50, assignedTo: ['2023'] },
      { id: 19,  name: 'หัวมุมอาคาร 3 และห้องน้ำหญิง', time: '15:40-16:10', lat: 6.78755, lng: 101.40825, radius: 40, assignedTo: ['2083'] },
      { id: 20,  name: 'หน้าอาคาร 5 ตรวจตรานักเรียนหนีลงก่อนหมดคาบ', time: '15:40-16:10', lat: 6.7877, lng: 101.4084, radius: 50, assignedTo: ['2056', '2061'] }
    ];

    const defaultReports = [];

    const defaultSettings = {
      schoolName: 'โรงเรียนมูลนิธิอาซิซสถาน',
      headName: 'นาย ฮัมบาลี วาจิ',
      directorName: 'ดร.มูฮัมหมัด ซากี',
      lineToken: '',
      telegramToken: '',
      telegramChatId: '',
      autoNotifyMinutes: 15,
      dutyDay: 'อังคาร',
      dutyGroup: 'ครูชาย',
      defaultRadius: 50,
      centerLat: 6.787680,
      centerLng: 101.408120,
      systemLogo: '',
      systemTitle: 'ระบบบันทึกและติดตามการปฏิบัติเวร',
      systemColor: '#14532d',
      headsOfDay: {}
    };

    // SQL code block template string
    const sqlCode = `-- คัดลอกคำสั่งด้านล่างนี้ไปรันในเมนู SQL Editor ของ Supabase

-- 1. สร้างตารางข้อมูลคุณครู
CREATE TABLE IF NOT EXISTS teachers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'teacher',
  phone TEXT,
  signature TEXT,
  password TEXT NOT NULL DEFAULT '1234'
);

-- 2. สร้างตารางจุดปฏิบัติหน้าที่เวรประจำวัน
CREATE TABLE IF NOT EXISTS duty_points (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  time TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  radius INTEGER NOT NULL DEFAULT 50,
  assigned_to TEXT[] NOT NULL DEFAULT '{}'::text[],
  duty_group TEXT NOT NULL DEFAULT 'ครูชาย',
  lat2 DOUBLE PRECISION,
  lng2 DOUBLE PRECISION,
  radius2 INTEGER
);

-- 3. สร้างตารางรายงานผลการปฏิบัติหน้าที่เวร
CREATE TABLE IF NOT EXISTS reports (
  id TEXT PRIMARY KEY,
  date DATE NOT NULL,
  point_id BIGINT NOT NULL,
  teacher_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'not_reported',
  time TEXT NOT NULL,
  distance DOUBLE PRECISION NOT NULL,
  result TEXT,
  problem TEXT,
  solution TEXT,
  photo TEXT,
  signature TEXT
);

-- 4. สร้างตารางจัดการการตั้งค่าระบบและ Token ต่างๆ
CREATE TABLE IF NOT EXISTS settings (
  id TEXT PRIMARY KEY,
  school_name TEXT NOT NULL,
  head_name TEXT NOT NULL,
  director_name TEXT NOT NULL,
  line_token TEXT,
  telegram_token TEXT,
  telegram_chat_id TEXT,
  auto_notify_minutes INTEGER NOT NULL DEFAULT 15,
  duty_day TEXT DEFAULT 'อังคาร',
  duty_group TEXT DEFAULT 'ครูชาย',
  default_radius INTEGER DEFAULT 50,
  center_lat DOUBLE PRECISION DEFAULT 6.787680,
  center_lng DOUBLE PRECISION DEFAULT 101.408120,
  system_logo TEXT,
  system_title TEXT,
  system_color TEXT,
  heads_of_day TEXT DEFAULT '{}'
);

-- 5. ปิดการตั้งค่า RLS เพื่ออนุญาตให้เขียนอ่านตรงได้สำหรับเว็บสาธิตนี้
ALTER TABLE teachers DISABLE ROW LEVEL SECURITY;
ALTER TABLE duty_points DISABLE ROW LEVEL SECURITY;
ALTER TABLE reports DISABLE ROW LEVEL SECURITY;
ALTER TABLE settings DISABLE ROW LEVEL SECURITY;

-- 6. นำเข้าข้อมูลเริ่มต้นที่จำเป็นลงในตาราง
-- [ลบข้อมูลเก่าก่อน แล้วค่อยใส่ใหม่ เพื่อป้องกันข้อมูลซ้ำ]
DELETE FROM duty_points;
DELETE FROM teachers;

-- อัปเกรดฐานข้อมูลเดิมเพิ่มคอลัมน์รหัสผ่านในตาราง (ปลอดภัยกรณีตารางมีอยู่แล้ว)
ALTER TABLE teachers ADD COLUMN IF NOT EXISTS password TEXT NOT NULL DEFAULT '1234';

-- อัปเกรดฐานข้อมูลเดิมเพิ่มคอลัมน์กลุ่มเวรและพิกัดบริเวณที่ 2 ในตาราง duty_points (ปลอดภัยกรณีตารางมีอยู่แล้ว)
ALTER TABLE duty_points ADD COLUMN IF NOT EXISTS duty_group TEXT NOT NULL DEFAULT 'ครูชาย';
ALTER TABLE duty_points ADD COLUMN IF NOT EXISTS lat2 DOUBLE PRECISION;
ALTER TABLE duty_points ADD COLUMN IF NOT EXISTS lng2 DOUBLE PRECISION;
ALTER TABLE duty_points ADD COLUMN IF NOT EXISTS radius2 INTEGER;

INSERT INTO teachers (id, name, role, phone, signature, password) VALUES
('admin', 'แอดมินฝ่ายปกครอง', 'admin', '0811111100', NULL, '1234'),
('chief', 'หัวหน้าเวรใหญ่', 'chief', '0822222200', NULL, '1234'),
('director', 'ดร.มูฮัมหมัด ซากี', 'director', '0833333300', NULL, '1234'),
('1087', 'KruHambaleeWaji', 'head', '0800000000', NULL, '1234'),
('2001', 'MR.MHD ADAM IBRAHIM', 'teacher', '0802653414', NULL, '1234'),
('2002', 'กาญจนา โต๊ะยะลา', 'teacher', '0614682981', NULL, '1234'),
('1003', 'กาญจนา สาซู', 'teacher', '0928312878', NULL, '1234'),
('1007', 'กูรัยนี นินาวา', 'teacher', '0800000000', NULL, '1234'),
('1012', 'ซอฟียะห์ ดอเลาะ', 'teacher', '0800000000', NULL, '1234'),
('2087', 'นาง ปาสียะห์ สาและ', 'teacher', '0986970151', NULL, '1234'),
('1001', 'นางกอมารีเยาะ เส็นสะนา', 'teacher', '0980615045', NULL, '1234'),
('1006', 'นางกูดาเรีย อับดุลวาฮับ', 'teacher', '0892985362', NULL, '1234'),
('2004', 'นางขอซีหน๊ะ ลาเต๊ะมูหะมะ', 'teacher', '0927721693', NULL, '1234'),
('1008', 'นางคอลีเยาะห์ มอลอ', 'teacher', '0807105142', NULL, '1234'),
('1010', 'นางจุฑารัตน์  ดอเลาะ', 'teacher', '0661571899', NULL, '1234'),
('1011', 'นางซอบารียะห์ ปะจู', 'teacher', '0874326506', NULL, '1234'),
('1018', 'นางซูรีนา เจ๊ะมิง', 'teacher', '0800000000', NULL, '1234'),
('2022', 'นางนูซียะ มะลี', 'teacher', '0812778427', NULL, '1234'),
('1038', 'นางนูรีมัน ยูโซะ', 'teacher', '0800000000', NULL, '1234'),
('2027', 'นางปาสียะห์ สาและ', 'teacher', '0800000000', NULL, '1234'),
('1047', 'นางมัซนี บือแน', 'teacher', '0611753312', NULL, '1234'),
('1050', 'นางมารียานี แวนาแซ', 'teacher', '0831924035', NULL, '1234'),
('2036', 'นางมีรีแย ยีหวัง', 'teacher', '0848563141', NULL, '1234'),
('1059', 'นางโรหะนี  เลาะดีเยาะ', 'teacher', '0800000000', NULL, '1234'),
('1061', 'นางลาตีปะ เสะบิง', 'teacher', '0980265416', NULL, '1234'),
('1063', 'นางลียานา  สะมะแอ', 'teacher', '0897323712', NULL, '1234'),
('2053', 'นางแวอามีเนาะ   แวและ', 'teacher', '0899786430', NULL, '1234'),
('1067', 'นางสารีปะห์  ยูโซะ', 'teacher', '0800000000', NULL, '1234'),
('1109', 'นางสาว ตัสนีม', 'teacher', '0800000000', NULL, '1234'),
('1110', 'นางสาว ฮัสนี เจะสะมะ', 'teacher', '0873973189', NULL, '1234'),
('1002', 'นางสาวกัสมา เด็นมูณี', 'teacher', '0898087933', NULL, '1234'),
('2003', 'นางสาวกามารียะ มะแซ', 'teacher', '0829386919', NULL, '1234'),
('1004', 'นางสาวกามารีเยาะ มะมิง', 'teacher', '0800000000', NULL, '1234'),
('1005', 'นางสาวการีม๊ะ สาเหาะ', 'teacher', '0800000000', NULL, '1234'),
('2005', 'นางสาวคอดีเยาะ สาหลำ', 'teacher', '0937451487', NULL, '1234'),
('2006', 'นางสาวเจะรอสียะห์ ปาโห๊ะ', 'teacher', '0887994776', NULL, '1234'),
('1086', 'นางสาวชนิณี กาเดร์', 'teacher', '0989485174', NULL, '1234'),
('1013', 'นางสาวซารีนา ยูโซะ', 'teacher', '0980477513', NULL, '1234'),
('1014', 'นางสาวซารียะ บาเหม', 'teacher', '0862844859', NULL, '1234'),
('1015', 'นางสาวซิครอ ยูโซ๊ะ', 'teacher', '0659132083', NULL, '1234'),
('2011', 'นางสาวซีฮาม เจะยามา', 'teacher', '0850791345', NULL, '1234'),
('1017', 'นางสาวซูรอหะนี แดบอ', 'teacher', '0937347820', NULL, '1234'),
('2012', 'นางสาวไซด๊ะ ตาเละ', 'teacher', '0848623955', NULL, '1234'),
('1019', 'นางสาวดาลีลาอ์  กรียอ', 'teacher', '0800000000', NULL, '1234'),
('1022', 'นางสาวต่วนโรสนียา ต่วนบือซา', 'teacher', '0924274792', NULL, '1234'),
('1023', 'นางสาวตอฮีเราะห์ หะยีแวสะแลแม', 'teacher', '0847473781', NULL, '1234'),
('1025', 'นางสาวตัสนีม กาลาแต', 'teacher', '0962262976', NULL, '1234'),
('1024', 'นางสาวตัสนีม มะมิง', 'teacher', '0848606626', NULL, '1234'),
('2051', 'นางสาวนาซูฮา สาและ', 'teacher', '0926856795', NULL, '1234'),
('1028', 'นางสาวนาบีล๊ะ สาเมาะบาซา', 'teacher', '0872973446', NULL, '1234'),
('1030', 'นางสาวนาวาล กะจิ', 'teacher', '0883947995', NULL, '1234'),
('2019', 'นางสาวนาวาล เคดาร์', 'teacher', '0836542287', NULL, '1234'),
('1031', 'นางสาวนาอีหม๊ะ เฮ็งปิยา', 'teacher', '0831852893', NULL, '1234'),
('1032', 'นางสาวนิสรีน สาแลหมัน', 'teacher', '0804501893', NULL, '1234'),
('2021', 'นางสาวนุรริย๊ะ ดอมะ', 'teacher', '0926280474', NULL, '1234'),
('2085', 'นางสาวนูรมี หะนิมะ', 'teacher', '0981458750', NULL, '1234'),
('1034', 'นางสาวนูรไอนี หะยีเลาะ', 'teacher', '0800000000', NULL, '1234'),
('1035', 'นางสาวนูรฮูดา หะยีเลาะ', 'teacher', '0958431240', NULL, '1234'),
('1036', 'นางสาวนูรีซัน อีซอ', 'teacher', '0650681927', NULL, '1234'),
('1099', 'นางสาวนูรีซา เจะแม', 'teacher', '0955246721', NULL, '1234'),
('1037', 'นางสาวนูรีซา ดาหมิ', 'teacher', '0828295814', NULL, '1234'),
('1040', 'นางสาวปาตีเมาะ สาเด๊ะ', 'teacher', '0862986878', NULL, '1234'),
('1041', 'นางสาวฟาดีละห์ เหมาะจะโรจน์', 'teacher', '0623795161', NULL, '1234'),
('1043', 'นางสาวฟาติน ดอเลาะ', 'teacher', '0800000000', NULL, '1234'),
('2025', 'นางสาวฟาตีเมาะ เจะเตะ', 'teacher', '0936726250', NULL, '1234'),
('1044', 'นางสาวฟาตีฮะ วาจิ', 'teacher', '0611023061', NULL, '1234'),
('1045', 'นางสาวฟิตรียา แวเด็ง', 'teacher', '0950265821', NULL, '1234'),
('1048', 'นางสาวมัยมูนะห์ ตาเยะ', 'teacher', '0878995618', NULL, '1234'),
('1049', 'นางสาวมัรกะ แวอาแซ', 'teacher', '0800000000', NULL, '1234'),
('1051', 'นางสาวมีรฟัต จูแซ', 'teacher', '0987438529', NULL, '1234'),
('1096', 'นางสาวไมมูนะห์ สาและ', 'teacher', '0937712650', NULL, '1234'),
('2043', 'นางสาวยาวาเฮร์ แวสามะ', 'teacher', '0926368700', NULL, '1234'),
('2047', 'นางสาวรอวียะห์ อาเยาะแซ', 'teacher', '0808739341', NULL, '1234'),
('1092', 'นางสาวรัชฎาภรณ์ ลายพรหม', 'teacher', '0800000000', NULL, '1234'),
('1057', 'นางสาวรุสดา ดอเลาะเซาะ', 'teacher', '0987039943', NULL, '1234'),
('2050', 'นางสาวรุสลีณีย์ ลาเตะ', 'teacher', '0971169370', NULL, '1234'),
('1058', 'นางสาวรูไซนี ดือรามะ', 'teacher', '0937858482', NULL, '1234'),
('1062', 'นางสาวลาตีฟะห์ วาเยะ', 'teacher', '0908815915', NULL, '1234'),
('2054', 'นางสาวแวฮาซือนะ แวดาโอะ', 'teacher', '0643370453', NULL, '1234'),
('1066', 'นางสาวสารีด๊ะ หะยีมาซอ', 'teacher', '0856704872', NULL, '1234'),
('1068', 'นางสาวสารียา สาหลำ', 'teacher', '0808638360', NULL, '1234'),
('1071', 'นางสาวสุไรยา มะมิง', 'teacher', '0800000000', NULL, '1234'),
('1073', 'นางสาวสูไฮลา โตะวี', 'teacher', '0828345128', NULL, '1234'),
('1077', 'นางสาวอัญญารัตน์ ชาจิตะ', 'teacher', '0800000000', NULL, '1234'),
('1082', 'นางสาวอัลฟาตีฮะห์ ฮะซา', 'teacher', '0800000000', NULL, '1234'),
('1084', 'นางสาวอานีซ๊ะ ซูและ', 'teacher', '0806676621', NULL, '1234'),
('1085', 'นางสาวอานีซะ นาแว', 'teacher', '0808408737', NULL, '1234'),
('1093', 'นางสาวอาฟีฟะห์ ดอเลาะ', 'teacher', '0660126701', NULL, '1234'),
('2074', 'นางสาวอาอีดะห์ กาเจ', 'teacher', '0807170789', NULL, '1234'),
('1088', 'นางสาวฮัสนี เจะสะมะ', 'teacher', '0800000000', NULL, '1234'),
('2068', 'นางสาวฮาซียะ มะลี', 'teacher', '0892284260', NULL, '1234'),
('1089', 'นางสาวฮาซือนะห์  สะมะแอ', 'teacher', '0843977787', NULL, '1234'),
('1090', 'นางสาวฮายาตี อาแว', 'teacher', '0895961613', NULL, '1234'),
('1091', 'นางสาวฮาริซา เคดาร์', 'teacher', '0980139557', NULL, '1234'),
('1069', 'นางสุดารัตน์ เลขานุกิจ', 'teacher', '0654088827', NULL, '1234'),
('1070', 'นางสุริยา ศรีสุภาสิตานนท์', 'teacher', '0894623352', NULL, '1234'),
('1072', 'นางสุวิมล กุลชมภู', 'teacher', '0807101608', NULL, '1234'),
('1076', 'นางอนุสรา ขุนริทธ์', 'teacher', '0892365446', NULL, '1234'),
('1083', 'นางอัสลีนา สะอิด', 'teacher', '0822657617', NULL, '1234'),
('2073', 'นางอาอีซ๊ะ แวกีจิ', 'teacher', '0966917307', NULL, '1234'),
('2080', 'นางฮายาตี ดือราแม', 'teacher', '0653924201', NULL, '1234'),
('1102', 'นาย Demo', 'teacher', '0800000000', NULL, '1234'),
('2086', 'นายกมูฮัมหมัดอารีเฟ็น เปาะโน', 'teacher', '0831312897', NULL, '1234'),
('1095', 'นายครูสอนดี รักเด็ก', 'teacher', '0987654321', NULL, '1234'),
('1009', 'นายโฆษิทร์ บิลละโสย', 'teacher', '0819782466', NULL, '1234'),
('2007', 'นายเจะสู เจะหะ', 'teacher', '0807073484', NULL, '1234'),
('2008', 'นายเจ๊ะฮาเซ็น เจะปอ', 'teacher', '0654184407', NULL, '1234'),
('2009', 'นายซอบรี จานะ', 'teacher', '0814784059', NULL, '1234'),
('1016', 'นายซุห์ดี สาและ', 'teacher', '0817679216', NULL, '1234'),
('2013', 'นายไซดิง  เจ๊ะเลง', 'teacher', '0897364065', NULL, '1234'),
('2014', 'นายดนรอศักดิ์ จะโรจน์หวัง', 'teacher', '0928741778', NULL, '1234'),
('2015', 'นายดานิยา แวเด็ง', 'teacher', '0950303652', NULL, '1234'),
('1020', 'นายดาเล็ง สาหลำ', 'teacher', '0800000000', NULL, '1234'),
('1021', 'นายดีนัร สาฮะ', 'teacher', '0611643545', NULL, '1234'),
('2016', 'นายโดรอแม เจะเหมาะ', 'teacher', '0800000000', NULL, '1234'),
('2017', 'นายตาร์มิซี เมาตี', 'teacher', '0862864789', NULL, '1234'),
('1026', 'นายตูวันอับดุลเลาะห์ ตุวันหะยี', 'teacher', '0931757970', NULL, '1234'),
('2018', 'นายนัทธีร์ หะยีเต๊ะ', 'teacher', '0934491503', NULL, '1234'),
('1027', 'นายนัสรี บินรัตแก้ว', 'teacher', '0869616456', NULL, '1234'),
('2061', 'นายนิมิตร เจะยามา', 'teacher', '0945354344', NULL, '1234'),
('1033', 'นายนูรดีน เสนสะนา', 'teacher', '0612160171', NULL, '1234'),
('2023', 'นายนูรุดิง ดือราแม', 'teacher', '0980296573', NULL, '1234'),
('1039', 'นายปาดิล เจะเลง', 'teacher', '0800000000', NULL, '1234'),
('2026', 'นายเปาซี แมเราะ', 'teacher', '0862919171', NULL, '1234'),
('1042', 'นายฟาเดล อับดุลวาฮับ', 'teacher', '0898708010', NULL, '1234'),
('2028', 'นายมะแซ ดอเลาะ', 'teacher', '0876331136', NULL, '1234'),
('2029', 'นายมะนาเซ แยนา', 'teacher', '0860463077', NULL, '1234'),
('2030', 'นายมะนาเซ สาและ', 'teacher', '0929317573', NULL, '1234'),
('2031', 'นายมะมือลี หะยีมะมิง', 'teacher', '0869619865', NULL, '1234'),
('2032', 'นายมะรอนิง มอลอ', 'teacher', '0872961282', NULL, '1234'),
('2033', 'นายมะสารี อาลีมามะ', 'teacher', '0800000000', NULL, '1234'),
('1046', 'นายมะหามะสะปูดิง อาแว', 'teacher', '0844075660', NULL, '1234'),
('2034', 'นายมังโซ หะยีบากา', 'teacher', '0659633178', NULL, '1234'),
('1052', 'นายมุกตาร์ เจ๊ะมูเก็ง', 'teacher', '0810952985', NULL, '1234'),
('2037', 'นายมูหมัด เจะและ', 'teacher', '0642980507', NULL, '1234'),
('1053', 'นายมูฮัมมัดกาแมล สาแลหมัน', 'teacher', '0937264202', NULL, '1234'),
('2040', 'นายมูฮัมมัดเปาซี ลาเต๊ะมูหะมะ', 'teacher', '0869622823', NULL, '1234'),
('2041', 'นายมูฮัมหมัดอิกบัล แวเด็ง', 'teacher', '0643401891', NULL, '1234'),
('2042', 'นายมูฮำมมัดเปาซี แวซู', 'teacher', '0800000000', NULL, '1234'),
('2044', 'นายยูโซะ จารง', 'teacher', '0800000000', NULL, '1234'),
('2045', 'นายยูโซะ ใบหมัด', 'teacher', '0980455881', NULL, '1234'),
('2046', 'นายรอย๊ะ หวันโส๊ะ', 'teacher', '0896549496', NULL, '1234'),
('2048', 'นายรอสดี จานะ', 'teacher', '0869568984', NULL, '1234'),
('2049', 'นายรุสลี มะยะอิง', 'teacher', '0656476342', NULL, '1234'),
('1060', 'นายฤทธิเกียรติ หะยีวามิส', 'teacher', '0635940689', NULL, '1234'),
('1064', 'นายวินัย บินสือนิ', 'teacher', '0800000000', NULL, '1234'),
('2052', 'นายแวอับดุลรอเฮม เจะหะมะ', 'teacher', '0876321126', NULL, '1234'),
('1065', 'นายศราวุธ เส็นสะนา', 'teacher', '0612289885', NULL, '1234'),
('2055', 'นายสาปียัน มะเสาะ', 'teacher', '0961320156', NULL, '1234'),
('2056', 'นายสาฮูดี บือราเฮง', 'teacher', '0992105390', NULL, '1234'),
('2058', 'นายหัซมาน มอลอ', 'teacher', '0846912951', NULL, '1234'),
('2059', 'นายหามะ สือแม', 'teacher', '0984963001', NULL, '1234'),
('1074', 'นายอดินันท์  สะอิด', 'teacher', '0800000000', NULL, '1234'),
('1075', 'นายอดิศักดิ์ ตาเยะ', 'teacher', '0871394027', NULL, '1234'),
('2060', 'นายอะห์มัด มูฮำหมัด', 'teacher', '0815183756', NULL, '1234'),
('1080', 'นายอับดลอารีด เดชอรัญ', 'teacher', '0813889706', NULL, '1234'),
('1078', 'นายอับดุลการีม สาหลำ', 'teacher', '0894683530', NULL, '1234'),
('2063', 'นายอับดุลมุตอเละ โตะมิง', 'teacher', '0656580331', NULL, '1234'),
('2064', 'นายอับดุลยาเลล หมะอุเส็น', 'teacher', '0819699712', NULL, '1234'),
('2065', 'นายอับดุลรอเซด โตะมิง', 'teacher', '0806131207', NULL, '1234'),
('2083', 'นายอับดุลรอฟาร์ ตาเยะ', 'teacher', '0993456784', NULL, '1234'),
('1079', 'นายอับดุลรอมัน เส็นสะนา', 'teacher', '0898799392', NULL, '1234'),
('2066', 'นายอับดุลเลาะ เจะเฮาะ', 'teacher', '0827788684', NULL, '1234'),
('1081', 'นายอัมราม บอสู', 'teacher', '0862885962', NULL, '1234'),
('2067', 'นายอัศมาน มูซอ', 'teacher', '0800000000', NULL, '1234'),
('2069', 'นายอามัน สะตาปอ', 'teacher', '0981172232', NULL, '1234'),
('2070', 'นายอามาน เจ๊ะหะมะ', 'teacher', '0800000000', NULL, '1234'),
('2071', 'นายอามีนูลเลาะห์ อาลี', 'teacher', '0892890155', NULL, '1234'),
('2072', 'นายอาหามะ เจ๊ะอะ', 'teacher', '0800000000', NULL, '1234'),
('2075', 'นายอิบรอฮิม อาดำ', 'teacher', '0803468066', NULL, '1234'),
('2077', 'นายอิสมาแอ มาหะ', 'teacher', '0817039366', NULL, '1234'),
('2076', 'นายอีลฮัม ลาแซ', 'teacher', '0936906052', NULL, '1234'),
('2078', 'นายอุสมาน แวนาแว', 'teacher', '0800000000', NULL, '1234'),
('2081', 'นายฮาลูมิง มะเสาะ', 'teacher', '0810996457', NULL, '1234'),
('1029', 'นารมา ณะมะลายู', 'teacher', '0800000000', NULL, '1234'),
('2024', 'ปาอีซ๊ะ ดือราแม', 'teacher', '0800000000', NULL, '1234'),
('2035', 'มานาล ศรีริกานนท์', 'teacher', '0800000000', NULL, '1234'),
('2039', 'มาหามะลุตพี เมซา', 'teacher', '0800357646', NULL, '1234'),
('1056', 'รีฮาม อับดุลวาฮับ', 'teacher', '0800000000', NULL, '1234'),
('2010', 'สีตีมาเรียม เมซา', 'teacher', '0833996635', NULL, '1234'),
('2057', 'สุไมยะห์ บินรัตแก้ว', 'teacher', '0930313729', NULL, '1234'),
('2062', 'อัดสนะ เจ๊ะแต', 'teacher', '0800000000', NULL, '1234')
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, role=EXCLUDED.role, phone=EXCLUDED.phone, password=EXCLUDED.password;

INSERT INTO duty_points (id, name, time, lat, lng, radius, assigned_to) VALUES
(1,  'ประจำประตูกับอาแซ', '08:00-09:00', 6.78768, 101.40812, 50, ARRAY['1065']),
(2,  'ประจำโตะปิงปอง', '08:00-09:15', 6.7878, 101.4082, 40, ARRAY['1026','2040']),
(3,  'ลงแถวจัดระเบียบแถว ตรวจเครื่องแบบ (ปวช/สามัญ)', '07:50-08:20', 6.7875, 101.40805, 50, ARRAY['1027','2059','1087','2018','2083']),
(4,  'อาคาร 5-6 และปิดประตู เร่งนักเรียนเข้าแถว', '07:55-08:20', 6.7876, 101.4083, 40, ARRAY['2061']),
(5,  'อาคาร 5 เร่งนักเรียนเข้าแถว', '07:50-08:20', 6.7877, 101.4084, 40, ARRAY['2023']),
(6,  'คาบแรกอาคาร 5 เร่งนักเรียนเข้าเรียน', '08:20-08:40', 6.7877, 101.4084, 40, ARRAY['2083','2018']),
(7,  'ลาดตระเวน คาบ 3', '10:00-10:45', 6.788, 101.4086, 60, ARRAY['2056','1074']),
(8,  'ลาดตระเวน คาบ 4', '10:45-11:30', 6.788, 101.4086, 60, ARRAY['2059','1026']),
(9,  'ก่อนหมดคาบ 5 ตรวจตรานักเรียนหนีลงเขาโรงอาหาร', '11:50-12:15', 6.7879, 101.4085, 50, ARRAY['2018','1074']),
(10,  'บริเวณโตะปิงปองถึงประตูใหญ่ ตรวจตรานักเรียนหนีกลับบ้าน (คาบ 5)', '11:45-12:10', 6.7878, 101.4082, 50, ARRAY['1079']),
(11,  'บริเวณโตะปิงปองถึงประตูใหญ่ ตรวจตรานักเรียนหนีกลับบ้าน (คาบ 6)', '12:15-13:00', 6.7878, 101.4082, 50, ARRAY['1065']),
(12,  'ประจำมูซอลลา/มัสยิด เป็นอีม่ามและจัดระเบียบการละหมาดของนักเรียน', '12:15-13:10', 6.7882, 101.4088, 60, ARRAY['2061','2059','1087','2056','2023','1027']),
(13,  'ลาดตระเวณคาบ 7 (เน้นหน้าห้องน้ำโรงยิมและห้องน้ำใกล้มูซอลลา/มัสยิด)', '13:55-14:40', 6.7881, 101.4087, 60, ARRAY['1079','1026']),
(14,  'ลาดตระเวณคาบ 8', '14:40-15:40', 6.788, 101.4086, 60, ARRAY[]::text[]),
(15,  'ช่องแตเบาแลกเอกสาร ตรวจตรานักเรียนหนีกลับบ้านก่อนหมดคาบ 9', '15:40-16:10', 6.78765, 101.40815, 50, ARRAY['2040']),
(16,  'บริเวณทิจอตรถมอเตอร์ไซด์ชาย', '15:40-16:10', 6.7874, 101.4079, 50, ARRAY['1102']),
(17,  'บริเวณหน้าห้องพักอุสตาสหน้าโรงยิม ตรวจตรานักเรียนหนีกลับบ้านก่อนหมดคาบ 9', '15:40-16:10', 6.7883, 101.409, 50, ARRAY['1087']),
(18,  'บริเวณส่วนก สวนเกษตรทางลงนักเรียนหนีกลับบ้านก่อนหมดคาบ', '15:40-16:10', 6.7872, 101.4078, 50, ARRAY['2023']),
(19,  'หัวมุมอาคาร 3 และห้องน้ำหญิง', '15:40-16:10', 6.78755, 101.40825, 40, ARRAY['2083']),
(20,  'หน้าอาคาร 5 ตรวจตรานักเรียนหนีลงก่อนหมดคาบ', '15:40-16:10', 6.7877, 101.4084, 50, ARRAY['2056','2061'])
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, time=EXCLUDED.time, lat=EXCLUDED.lat, lng=EXCLUDED.lng, radius=EXCLUDED.radius, assigned_to=EXCLUDED.assigned_to;

-- 6.1 จุดปฏิบัติหน้าที่เวร "ครูหญิง" (21 จุด, id 21-41)
--     lat/lng = พิกัดโรงเรียน (placeholder, แอดมินปรับพิกัดจริงทีหลังผ่านหน้า "ตั้งค่าพิกัดจุดเวร")
INSERT INTO duty_points (id, name, time, lat, lng, radius, assigned_to, duty_group) VALUES
(21, 'เวรประจำทางเข้าหอพักชาย/ใต้ต้นประดู่', '07:50-08:30', 6.692969, 101.139128, 50, ARRAY['1032','1003'], 'ครูหญิง'),
(22, 'เวรหน้าอาคาร ปวช.', '07:50-08:30', 6.692969, 101.139128, 50, ARRAY['2019'], 'ครูหญิง'),
(23, 'ลงแถวอาคาร 1 หน้าเสาธง', '07:50-08:30', 6.692969, 101.139128, 50, ARRAY['1093','1069','1086','1096'], 'ครูหญิง'),
(24, 'ลงแถวอาคาร ปวช.', '07:50-08:30', 6.692969, 101.139128, 50, ARRAY['1034'], 'ครูหญิง'),
(25, 'ลงแถวอาคาร 6', '07:50-08:30', 6.692969, 101.139128, 50, ARRAY['1015','1025'], 'ครูหญิง'),
(26, 'บริเวณอาคาร 6', '07:50-08:20', 6.692969, 101.139128, 50, ARRAY['1085','2087'], 'ครูหญิง'),
(27, 'ลาดตระเวน (ช่วงเช้า)', '10:00-10:45', 6.692969, 101.139128, 50, ARRAY['1034','2043'], 'ครูหญิง'),
(28, 'ใต้ต้นประดู่และบริเวณห้องสมุดห้องประชุม (ก่อนหมดเวลาคาบ 5)', '11:40-12:15', 6.692969, 101.139128, 50, ARRAY['1096'], 'ครูหญิง'),
(29, 'เวรอาคาร 6 ที่บันได (ก่อนหมดเวลาคาบ 5)', '11:40-12:15', 6.692969, 101.139128, 50, ARRAY['1085','1086'], 'ครูหญิง'),
(30, 'เวรบนอาคาร 1', '12:15-13:00', 6.692969, 101.139128, 50, ARRAY['2019','1069'], 'ครูหญิง'),
(31, 'เวรโรงอาหารหญิง', '12:15-13:00', 6.692969, 101.139128, 50, ARRAY['1032'], 'ครูหญิง'),
(32, 'เวรมูซอลลาหญิง', '12:15-13:00', 6.692969, 101.139128, 50, ARRAY['2054','2010'], 'ครูหญิง'),
(33, 'เวรมูซอลลาหญิง อาคาร 5', '12:15-13:00', 6.692969, 101.139128, 50, ARRAY['2003','1062'], 'ครูหญิง'),
(34, 'อาคาร 6 (ละหมาด)', '12:15-13:00', 6.692969, 101.139128, 50, ARRAY['1025'], 'ครูหญิง'),
(35, 'ประตูช่องแคบโรงอาหาร', '12:10-13:15', 6.692969, 101.139128, 50, ARRAY['1003'], 'ครูหญิง'),
(36, 'ลาดตระเวน (ช่วงบ่าย)', '14:30-15:15', 6.692969, 101.139128, 50, ARRAY['2003'], 'ครูหญิง'),
(37, 'เวรอัตลักษณ์ อาคาร 6', '15:50-16:20', 6.692969, 101.139128, 50, ARRAY['2087','2043'], 'ครูหญิง'),
(38, 'เวรอัตลักษณ์ บันไดห้องบุคลากร', '15:50-16:20', 6.692969, 101.139128, 50, ARRAY['2054','2010'], 'ครูหญิง'),
(39, 'เวรอัตลักษณ์ บันไดประชาสัมพันธ์', '15:50-16:20', 6.692969, 101.139128, 50, ARRAY['1062'], 'ครูหญิง'),
(40, 'เวรอัตลักษณ์ บันไดห้องกิจกรรมนักเรียน', '15:50-16:20', 6.692969, 101.139128, 50, ARRAY['1093'], 'ครูหญิง'),
(41, 'เวรอัตลักษณ์ บันไดห้องสมุด', '15:50-16:20', 6.692969, 101.139128, 50, ARRAY['1015'], 'ครูหญิง')
ON CONFLICT (id) DO NOTHING;

-- 6.2 จุดที่ 3 และ 12 มีการปฏิบัติหน้าที่ 2 บริเวณ -> ใส่พิกัดโรงเรียนเป็น placeholder บริเวณที่ 2
UPDATE duty_points SET lat2 = 6.692969, lng2 = 101.139128, radius2 = 50 WHERE id IN (3, 12) AND lat2 IS NULL;

-- 6.5 [สำคัญ!] เพิ่มคอลัมน์ใหม่ในตาราง settings ก่อน INSERT (รันได้ปลอดภัยหากมีคอลัมน์แล้ว)
ALTER TABLE settings ADD COLUMN IF NOT EXISTS duty_day TEXT DEFAULT 'อังคาร';
ALTER TABLE settings ADD COLUMN IF NOT EXISTS duty_group TEXT DEFAULT 'ครูชาย';
ALTER TABLE settings ADD COLUMN IF NOT EXISTS default_radius INTEGER DEFAULT 50;
ALTER TABLE settings ADD COLUMN IF NOT EXISTS center_lat DOUBLE PRECISION DEFAULT 6.787680;
ALTER TABLE settings ADD COLUMN IF NOT EXISTS center_lng DOUBLE PRECISION DEFAULT 101.408120;
ALTER TABLE settings ADD COLUMN IF NOT EXISTS system_logo TEXT;
ALTER TABLE settings ADD COLUMN IF NOT EXISTS system_title TEXT;
ALTER TABLE settings ADD COLUMN IF NOT EXISTS system_color TEXT;
ALTER TABLE settings ADD COLUMN IF NOT EXISTS heads_of_day TEXT DEFAULT '{}';

INSERT INTO settings (id, school_name, head_name, director_name, line_token, telegram_token, telegram_chat_id, auto_notify_minutes, duty_day, duty_group, default_radius, center_lat, center_lng, system_logo, system_title, system_color, heads_of_day) VALUES
('config', 'โรงเรียนมูลนิธิอาซิซสถาน', 'นาย ฮัมบาลี วาจิ', 'ดร.มูฮัมหมัด ซากี', '', '', '', 15, 'อังคาร', 'ครูชาย', 50, 6.787680, 101.408120, NULL, 'ระบบบันทึกและติดตามการปฏิบัติเวร', '#14532d', '{}')
ON CONFLICT (id) DO UPDATE SET school_name=EXCLUDED.school_name, head_name=EXCLUDED.head_name, director_name=EXCLUDED.director_name, duty_day=EXCLUDED.duty_day, duty_group=EXCLUDED.duty_group, default_radius=EXCLUDED.default_radius, center_lat=EXCLUDED.center_lat, center_lng=EXCLUDED.center_lng, system_logo=EXCLUDED.system_logo, system_title=EXCLUDED.system_title, system_color=EXCLUDED.system_color, heads_of_day=EXCLUDED.heads_of_day;
`;
