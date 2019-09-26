import { preciseRound } from '../util/number';
const meta: any = {
	speakersWorldPopulation: 6615,
	rank: [ '',
		'cmn','es','en','hi','ar','pt','bn','ru','ja','pa','de','jv','wuu','id','te','vi','ko','fr','mr',
		'ta','ur','tr','it','yue','th','gu','cjy','nan','fa','pl','ps','kn','hsn','ml','su','ha','or','my',
		'hak','uk','bh','tl','yo','bh','uz','sd','am','ff','ro','om','ig','az','awa','gan','ceb','nl','ku',
		'sh','mg','skr','ne','si','ctg','zha','km','tk','as','mad','so','mwr','bh','bgc','hu','hne','el',
		'ny','dcc','ak','kk','mnp','syl','zu','cs','rw','dhd','ht','cdo','ilo','qu','rn','sv','hmv','sn',
		'ug','hil','mos','xh','be','bal','kok','tt','hr','hmn','hy','lu','vec','sat','vls','st','lmn','kg',
		'sq','tig','hil','mn','ks','da','min','suk','he','sk','fi','wtm','af','gn','bik','scn','no','mnk',
		'tn','tg','luo','ka','ktu','lg'
	],
	speakers: [ 0,
		935,390,365,295,280,205,200,160,125,95,92,82,80,77,76,76,76,75,73,70,66,63,59,59,56,49,48,47,45,40,
		39,38,38,38,38,34,33,33,31,30,29,28,28,27,26,26,25,24,24,24,24,23,22,22,21,21,21,19,18,17,17,16,16,
		16,16,16,15,15,15,14,14,14,13,12,12,12,11,11,11,10.9,10.7,10.4,10,9.8,9.6,9.6,9.5,9.1,8.9,8.8,8.7,
		8.4,8.3,8.2,8.2,7.6,7.6,7.6,7.6,7.4
	],
	rtl: { ar:1,dv:1,fa:1,ha:1,he:1,ks:1,ku:1,ps:1,ur:1,yi:1 },
	common: { af:1,ar:1,bn:1,bo:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,en:1,et:1,eu:1,fa:1,fj:1,fi:1,fr:1,
		ga:1,gu:1,he:1,hi:1,hr:1,hu:1,hy:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,la:1,lv:1,lt:1,ml:1,mr:1,
		mk:1,mt:1,mn:1,mi:1,ms:1,ne:1,nl:1,no:1,pa:1,pl:1,pt:1,qu:1,ro:1,ru:1,sk:1,sl:1,sm:1,es:1,sq:1,
		sr:1,sw:1,sv:1,ta:1,tt:1,te:1,th:1,to:1,tr:1,uk:1,ur:1,uz:1,vi:1,xh:1,zh:1 },
  type: {
		ancient: 'akk,arc,ae,cu,cms,ecr,ecy,egy,elx,ett,gez,gmy,got,hit,hlu,htx,ims,imy,inm,kaw,kho,lab,la,lng,nei,nrc,nrp,nxm,oar,obm,och,oht,omn,oos,osc,oty,pal,pgl,pgn,phn,pi,plq,pyx,sa,sbv,scx,sog,spx,sux,sxc,sxo,txb,txg,txh,txr,uga,umc,xae,xaq,xbc,xcc,xce,xcg,xco,xcr,xdc,xdm,xeb,xep,xfa,xga,xha,xhd,xhr,xht,xhu,xib,xil,xiv,xlc,xld,xle,xlg,xli,xln,xlp,xls,xlu,xly,xme,xmk,xmr,xna,xpg,xpr,xpu,xqt,xrr,xsa,xsc,xsd,xtg,xto,xtr,xum,xur,xve,xvn,xvo,xvs,xzh,yms,zsk',
    historical: 'ang,axm,cmg,cnx,dum,enm,frm,fro,gmh,gml,goh,grc,hbo,jpa,ltc,lzh,mga,myz,nci,non,nwc,nwx,oav,obr,obt,oco,odt,ofs,oge,ohu,ojp,okm,oko,omp,omr,omx,onw,orv,osp,osx,ota,otb,otk,oui,owl,peo,pka,pmh,pro,psu,qwc,sga,sqr,syc,wlm,xaa,xbm,xcl,xct,xmn,xng,xno,xqa,xtq,xzp',
    extinct: 'aaq,abe,abj,aci,ack,acl,acs,aea,aes,aga,aho,aid,ait,ajw,akj,akm,akx,aky,ama,amz,ana,anb,ans,aoh,aor,apv,aqp,ard,arj,aru,ash,atc,auo,aux,avo,avs,awk,axb,axg,ayd,ayy,bae,bjb,bjy,bll,bmn,bnt,boi,bow,bpb,bpt,bqf,brc,brk,bsl,bsv,bte,bue,bvv,bxi,byg,byq,byt,bzr,caj,caz,cbe,cbh,cca,ccr,cea,chb,chc,chg,cht,cid,cjh,cmm,cob,coj,cop,coq,cow,coy,cpg,crb,crf,crr,crz,csi,css,ctm,cum,cuo,cup,cyb,czk,dcr,dep,dgn,dhu,dif,dit,djf,djl,djw,dlm,drq,drr,duy,duz,dyb,dyd,dyg,eli,emm,emo,emy,err,esm,esq,etc,eya,fln,fos,frk,gcd,gce,gdc,gft,ggd,ggk,ggr,ghc,gho,gli,gly,gma,gnc,gnl,gnr,gqn,guv,gvy,gwu,gyf,gyy,hib,hmk,hod,hom,hor,huw,iff,ilg,iml,inz,iow,ite,jgb,jng,jor,juc,jvd,kae,kba,kbb,kbf,kda,kgl,kgm,kii,kla,koc,kof,kox,kpn,kqu,kqz,krb,krk,ktg,ktk,ktq,ktw,kuz,kwz,kxo,kzk,kzw,laz,lby,len,lhs,llf,llk,lmc,lmz,lnj,lre,lrg,mbe,mcl,mem,mfw,mje,mjq,mjy,mkq,mmv,mnt,mod,mom,mre,msp,mtm,mtn,mvb,mvl,mwu,mxi,mys,mzo,nay,nbx,ncz,ndf,ngv,nhc,nid,nig,nkp,nmp,nmr,nmv,nnr,nnt,nnv,nny,nok,nom,nrn,nrt,nrx,nts,ntw,nuc,nug,nwa,nwy,nxn,nyp,nyt,nyv,nyx,obi,ofo,okj,okl,omc,ome,omk,omu,opt,oti,otu,oum,paf,pax,paz,pbg,peb,pef,pej,pie,pij,pim,pit,pkc,pmc,pmk,pml,pmz,pno,pod,pog,pox,ppu,prr,psm,psy,pth,ptw,puq,puy,qun,qwm,qwt,qyp,rem,rer,rgk,rmd,rna,sam,sar,sds,sdt,sgm,sht,sia,sis,sjk,sjs,skw,sln,smp,smu,snh,sni,sqn,sut,svx,sww,sxk,sxl,szd,tas,tbb,tbh,tbu,tcl,teb,ten,tep,tgv,tgy,til,tjm,tjn,tju,tka,tkf,tkm,tme,tmg,tmr,tmz,tnq,toe,tpk,tpn,tpw,tqr,tqw,try,trz,tta,tud,tun,tux,tvy,twa,twc,twt,txc,typ,uam,uby,ugb,umd,umg,umo,umr,unm,urc,urf,uru,urv,veo,vka,vkm,vmb,vmi,vml,vms,vmu,vmv,waf,wam,wao,wdu,wga,wgg,wie,wif,wil,wir,wiy,wka,wkw,wlk,wlu,wly,wma,wmi,wmn,wnd,wnm,woy,wrb,wrg,wrh,wri,wrw,wrz,wsu,wsv,wur,wwr,xad,xag,xai,xam,xap,xar,xas,xba,xbb,xbn,xbo,xbw,xbx,xcb,xch,xcm,xcn,xcu,xcv,xcw,xcy,xeg,xgf,xgl,xgr,xhc,xin,xip,xir,xkr,xlb,xlo,xmp,xmq,xmu,xnt,xoc,xoo,xpc,xpi,xpm,xpn,xpo,xpp,xpq,xps,xpy,xrm,xrn,xrt,xso,xss,xsv,xtz,xup,xut,xwc,xwo,xxb,xxr,xxt,xyl,xzm,ybn,yei,yil,ylr,yme,ymt,ynd,ynn,ynu,yob,yol,ysc,ysr,yub,yug,yuk,yvt,yww,zir,zkb,zkg,zkh,zkk,zko,zkp,zkt,zku,zkv,zkz,zmc,zme,zmh,zmk,zmu,zmv,znk,zra,zrp',
    constructed: 'afh,avk,bzt,dws,eo,io,igs,ie,ia,jbo,ldn,lfn,nov,qya,rmv,sjn,tlh,vo,zbl',
    special: 'mis,mul,und,zxx'
	},
  scope: {
		macroLanguage: 'ak,ar,ay,az,bal,bik,bnc,bua,chm,cr,del,den,din,doi,et,fa,ff,gba,gon,grb,gn,hai,sh,hmn,iu,ik,jrb,kr,kln,kok,kv,kg,kpe,ku,lah,lv,luy,man,mg,mn,ms,mwr,no,oj,om,ps,qu,raj,rom,sq,sc,sw,syr,tmh,uz,yi,zap,za,zh,zza',
	  special: 'mis,mul,und,zxx'
	},
	likelyScriptCountry: {
		rif:{_:'Tfng',NL:'Latn'},ky:{CN:'Arab',TR:'Latn'},kk:{_:'Cyrl',AF:'Arab',CN:'Arab',IR:'Arab'},
		ku:{_:'Latn',LB:'Arab'},tg:{_:'Cyrl',PK:'Arab'},pa:{_:'Guru',PK:'Arab'},uz:{_:'Latn',AF:'Arab',CN:'Cyrl'},
		ug:{_:'',KZ:'Cyrl',MN:'Cyrl'},yue:{_:'Hant',CN:'Hans'}
	},
	likelyScript: {
		Arab:'aeb,apc,apd,ar,arq,ary,arz,avl,bal,bej,bft,bgn,bqi,brh,cja,ckb,dcc,dgl,fa,fia,fub,gbz,gjk,gju,glk,gwc,gwt,haz,hnd,hno,kby,kdh,khw,ks,kvx,kxp,lah,lki,lrc,luz,mde,mfa,mki,mvy,mzn,oru,ota,phl,prd,ps,rhg,rmt,scl,sdh,shu,swb,trw,ur,wni,zdj,skr,ug,doi,ms,ha,az',
		Deva:'hi,awa,bap,bfy,bgc,bhb,bhi,bjj,bra,brx,btv,dty,gbm,ggn,gom,gvr,hne,hoj,jml,kfr,kfy,khn,kok,kru,mag,mgp,mrd,mtr,mwr,ne,noe,raj,rjs,sck,srx,swv,taj,tdg,tdh,thl,thq,thr,tkt,tsf,wbr,wtm,xnr,xsr,sa,mai,mr,new,hoc,bho',
		Cyrl:'ab,ady,alt,av,ba,be,bg,bua,ce,chm,cv,dar,inh,kaa,kbd,koi,krc,kum,lbe,mdf,mk,mrj,myv,os,ru,rue,sah,tt,tyv,udm,uk,kv,lez,cu,sr,mn',
		Ethi:'am,bcq,bji,bst,byn,drs,gez,gmv,gof,hdy,kqy,ktb,kxc,mdx,mym,sgw,ti,tig,wal',Brai:'fr',Dupl:'fr',
		Cans:'cr,crj,crk,crl,crm,csw,iu,nsk',Hans:'zh,gan,hak,hsn,nan,wuu,lzh',Telu:'gon,lmn,te,wbq',Hebr:'he,iw,ji,lad,yi',Beng:'as,bn,bpy,grt,rkt,unr,unx,syl,mni,ccp',Grek:'bgx,el,pnt,tsd',Thai:'kdt,kxm,lcp,lwl,sou,th,tts',Mymr:'kht,mnw,my,shn',Laoo:'kjg,lo',Knda:'kn,tcy',
		Kthi:'bho',Cprt:'grc',Linb:'grc',Hang:'ko',Jamo:'ko',Kore:'ko',Hira:'ja',Jpan:'ja',Hung:'hu',Khoj:'sd',Sind:'sd',Marc:'bo',Mero:'xmr',Osma:'so',Tglg:'fil',Phli:'pal',Phlp:'pal',Tfng:'shi,zgh',Taml:'bfq,ta',Tavt:'blt',Bamu:'bax',Bass:'bsq',Cher:'chr',Cham:'cjm',
		Copt:'cop',Merc:'xmr',Bopo:'zh',Hanb:'zh',Hani:'zh',Hant:'zh',Mahj:'hi',Elba:'sq',Mong:'mn',Armi:'arc',Nbat:'arc',Palm:'arc',Pauc:'ctd',Thaa:'dv',Tibt:'bo,dz,tsj',Egyp:'egy',Kali:'eky',Ital:'ett',Goth:'got',Gujr:'gu',Hluw:'hlu',Plrd:'hmd',Hmng:'hnj',Armn:'hy',Yiii:'ii',
		Geor:'ka,xmf',Talu:'khb',Khmr:'km',Sgnw:'ase',Ahom:'aho',Xsux:'akk',Avst:'ae',Lina:'lab',Lepc:'lep',Lisu:'lis',Hatr:'mis',Mlym:'ml',Mroo:'mro',Mand:'myz',Lana:'nod',Runr:'non',Bhks:'sa',Gran:'sa',Shrd:'sa',Sidd:'sa',Nkoo:'nqo',Orya:'or',Osge:'osa',Orkh:'otk',Xpeo:'peo',
		Phnx:'phn',Brah:'pka',Khar:'pra',Kana:'ja,ryu',Saur:'saz',Ogam:'sga',Sinh:'si',Samr:'smp',Sora:'srb',Syrc:'syr',Tale:'tdd',Tang:'txg',Ugar:'uga',Cari:'xcr',Lyci:'xlc',Lydi:'xld',Mani:'xmn',Narb:'xna',Prti:'xpr',Sarb:'xsa',Vaii:'vai'
	},
	likelyCountryLatin: {
		aa:'ET',abr:'GH',ace:'ID',ach:'UG',ada:'GH',af:'ZA',agq:'CM',ak:'GH',aln:'XK',amo:'NG',aoz:'ID',arn:'CL',aro:'BO',asa:'TZ',ast:'ES',atj:'CA',ay:'BO',az:'AZ',ban:'ID',bar:'AT',bas:'CM',bbc:'ID',bbj:'CM',bci:'CI',bem:'ZM',bew:'ID',bez:'TZ',bfd:'CM',bhk:'PH',bi:'VU',bik:'PH',bin:'NG',bjn:'ID',bkm:'CM',bku:'PH',bm:'ML',bmq:'ML',bqv:'CI',br:'FR',bs:'BA',bss:'CM',bto:'PH',buc:'YT',bug:'ID',bum:'CM',bvb:'GQ',byv:'CM',bze:'ML',ca:'ES',cch:'NG',ceb:'PH',cgg:'UG',ch:'GU',chk:'FM',cho:'US',chp:'CA',co:'FR',cps:'PH',crs:'SC',cs:'CZ',csb:'PL',cy:'GB',da:'DK',dak:'US',dav:'KE',de:'DE',den:'CA',dgr:'CA',dje:'NE',dnj:'CI',dsb:'DE',dtm:'ML',dtp:'MY',dua:'CM',dyo:'SN',dyu:'BF',ebu:'KE',ee:'GH',efi:'NG',egl:'IT',en:'US',eo:'001',es:'ES',esu:'US',et:'EE',eu:'ES',ewo:'CM',ext:'ES',fan:'GQ',ff:'SN',ffm:'ML',fi:'FI',fil:'PH',fit:'SE',fj:'FJ',fo:'FO',fon:'BJ',fr:'FR',frc:'US',frp:'FR',frr:'DE',frs:'DE',fud:'WF',fuf:'GN',fuq:'NE',fur:'IT',fuv:'NG',fvr:'SD',fy:'NL',ga:'IE',gaa:'GH',gag:'MD',gay:'ID',gcr:'GF',gd:'GB',gil:'KI',gl:'ES',gn:'PY',gor:'ID',gos:'NL',gsw:'CH',gub:'BR',guc:'CO',gur:'GH',guz:'KE',gv:'IM',gwi:'CA',ha:'NG',haw:'US',hif:'FJ',hil:'PH',hnn:'PH',ho:'PG',hr:'HR',hsb:'DE',ht:'HT',hu:'HU',hz:'NA',ia:'FR',iba:'MY',ibb:'NG',id:'ID',ig:'NG',ik:'US',ikt:'CA',ilo:'PH',in:'ID',is:'IS',it:'IT',izh:'RU',jam:'JM',jgo:'CM',jmc:'TZ',jut:'DK',jv:'ID',jw:'ID',kab:'DZ',kac:'MM',kaj:'NG',kam:'KE',kao:'ML',kcg:'NG',kck:'ZW',kde:'TZ',kea:'CV',ken:'CM',kfo:'CI',kg:'CD',kge:'ID',kgp:'BR',kha:'IN',khq:'ML',ki:'KE',kiu:'TR',kj:'NA',kkj:'CM',kl:'GL',kln:'KE',kmb:'AO',kos:'FM',kpe:'LR',kri:'SL',krj:'PH',krl:'RU',ksb:'TZ',ksf:'CM',ksh:'DE',ku:'TR',kvr:'ID',kw:'GB',ky:'TR',la:'VA',lag:'TZ',laj:'UG',lb:'LU',lbw:'ID',lg:'UG',li:'NL',lij:'IT',ljp:'ID',lkt:'US',lmo:'IT',ln:'CD',lol:'CD',loz:'ZM',lt:'LT',ltg:'LV',lu:'CD',lua:'CD',luo:'KE',luy:'KE',lv:'LV',lzz:'TR',mad:'ID',maf:'CM',mak:'ID',man:'GM',mas:'KE',maz:'MX',mdh:'PH',mdr:'ID',men:'SL',mer:'KE',mfe:'MU',mg:'MG',mgh:'MZ',mgo:'CM',mgy:'TZ',mh:'MH',mi:'NZ',min:'ID',mls:'SD',moe:'CA',moh:'CA',mos:'BF',ms:'MY',mt:'MT',mua:'CM',mus:'US',mwk:'ML',mwv:'ID',mxc:'ZW',myx:'UG',na:'NR',nap:'IT',naq:'NA',nb:'NO',nch:'MX',nd:'ZW',ndc:'MZ',nds:'DE',ng:'NA',ngl:'MZ',nhe:'MX',nhw:'MX',nij:'ID',niu:'NU',njo:'IN',nl:'NL',nmg:'CM',nn:'NO',nnh:'CM',no:'NO',nr:'ZA',nso:'ZA',nus:'SS',nv:'US',nxq:'CN',ny:'MW',nym:'TZ',nyn:'UG',nzi:'GH',oc:'FR',om:'ET',pag:'PH',pam:'PH',pap:'AW',pau:'PW',pcd:'FR',pcm:'NG',pdc:'US',pdt:'CA',pfl:'DE',pko:'KE',pl:'PL',pms:'IT',pon:'FM',prg:'001',pt:'BR',puu:'GA',qu:'PE',quc:'GT',qug:'EC',rcf:'RE',rej:'ID',rgn:'IT',ria:'IN',rif:'NL',rm:'CH',rmf:'FI',rmo:'CH',rmu:'SE',rn:'BI',rng:'MZ',ro:'RO',rob:'ID',rof:'TZ',rtm:'FJ',rug:'SB',rw:'RW',rwk:'TZ',saf:'GH',saq:'KE',sas:'ID',sat:'IN',sbp:'TZ',sc:'IT',scn:'IT',sco:'GB',scs:'CA',sdc:'IT',se:'NO',sef:'CI',seh:'MZ',sei:'MX',ses:'ML',sg:'CF',sgs:'LT',sid:'ET',sk:'SK',sl:'SI',sli:'PL',sly:'ID',sm:'WS',sma:'SE',smj:'SE',smn:'FI',sms:'FI',sn:'ZW',snk:'ML',so:'SO',sq:'AL',srn:'SR',srr:'SN',ss:'ZA',ssy:'ER',st:'ZA',stq:'DE',su:'ID',suk:'TZ',sus:'GN',sv:'SE',sw:'TZ',swc:'CD',swg:'DE',sxn:'ID',szl:'PL',tbw:'PH',tem:'SL',teo:'UG',tet:'TL',tiv:'NG',tk:'TM',tkl:'TK',tkr:'AZ',tl:'PH',tly:'AZ',tmh:'NE',tn:'ZA',to:'TO',tog:'MW',tpi:'PG',tr:'TR',tru:'TR',trv:'TW',ts:'ZA',tsg:'PH',ttj:'UG',ttt:'AZ',tum:'MW',tvl:'TV',twq:'NE',ty:'PF',tzm:'MA',uli:'FM',umb:'AO',uz:'UZ',ve:'ZA',vec:'IT',vep:'RU',vi:'VN',vic:'SX',vls:'BE',vmf:'DE',vmw:'MZ',vo:'001',vot:'RU',vro:'EE',vun:'TZ',wa:'BE',wae:'CH',war:'PH',wbp:'AU',wls:'WF',wo:'SN',xav:'BR',xh:'ZA',xog:'UG',yao:'MZ',yap:'FM',yav:'CM',ybb:'CM',yo:'NG',yrl:'BR',yua:'MX',za:'CN',zag:'SD',zea:'NL',zlm:'TG',zmi:'MY',zu:'ZA',zza:'TR'
	},
	likelyCountry: {
		ab:'GE',ady:'RU',ae:'IR',aeb:'TN',aho:'IN',akk:'IQ',alt:'RU',am:'ET',apd:'TG',ar:'EG',arq:'DZ',ary:'MA',arz:'EG',as:'IN',ase:'US',av:'RU',awa:'IN',ba:'RU',bal:'PK',bap:'NP',bax:'CM',be:'BY',bej:'SD',bfq:'IN',bft:'PK',bfy:'IN',bg:'BG',bgc:'IN',bgn:'PK',bgx:'TR',bhb:'IN',bhi:'IN',bho:'IN',bjj:'IN',blt:'VN',bn:'BD',bo:'CN',bpy:'IN',bqi:'IR',bra:'IN',brh:'PK',brx:'IN',bsq:'LR',btv:'PK',bua:'RU',byn:'ER',
		ce:'RU',chm:'RU',chr:'US',cja:'KH',cjm:'VN',ckb:'IQ',cop:'EG',cr:'CA',crj:'CA',crk:'CA',crl:'CA',crm:'CA',csw:'CA',ctd:'MM',cv:'RU',dar:'RU',dcc:'IN',doi:'IN',dty:'NP',dv:'MV',dz:'BT',egy:'EG',eky:'MM',el:'GR',en:'GB',ett:'IT',fa:'IR',ff:'GN',fia:'SD',fub:'CM',gan:'CN',gbm:'IN',gbz:'IR',gez:'ET',ggn:'NP',gjk:'PK',gju:'PK',glk:'IR',gom:'IN',gon:'IN',got:'UA',grt:'IN',gu:'IN',gvr:'NP',hak:'CN',haz:'AF',he:'IL',hi:'IN',hlu:'TR',hmd:'CN',hnd:'PK',hne:'IN',hnj:'LA',hno:'PK',hoc:'IN',hoj:'IN',hsn:'CN',hy:'AM',ii:'CN',inh:'RU',iu:'CA',iw:'IL',ja:'JP',ji:'UA',jml:'NP',ka:'GE',kaa:'UZ',kbd:'RU',kby:'NE',kdh:'TG',kdt:'TH',kfr:'IN',kfy:'IN',khb:'CN',khn:'IN',kht:'IN',khw:'PK',kjg:'LA',km:'KH',kn:'IN',ko:'KR',koi:'RU',kok:'IN',krc:'RU',kru:'IN',ks:'IN',kum:'RU',kv:'RU',kvx:'PK',kxm:'TH',kxp:'PK',lab:'GR',lad:'IL',lah:'PK',lbe:'RU',lcp:'CN',lep:'IN',lez:'RU',lis:'CN',lki:'IR',lmn:'IN',lo:'LA',lrc:'IR',luz:'IR',lwl:'TH',lzh:'CN',mag:'IN',mai:'IN',man:'GN',mdf:'RU',mfa:'TH',mgp:'NP',mis:'IQ',mk:'MK',ml:'IN',mni:'IN',mnw:'MM',mr:'IN',mrd:'NP',mrj:'RU',mro:'BD',mtr:'IN',mvy:'PK',mwr:'IN',my:'MM',myv:'RU',myz:'IR',mzn:'IR',nan:'CN',ne:'NP',new:'NP',nod:'TH',noe:'IN',non:'SE',nqo:'GN',nsk:'CA',or:'IN',os:'GE',osa:'US',otk:'MN',peo:'IR',phn:'LB',pka:'IN',pnt:'GR',pra:'PK',prd:'IR',ps:'AF',raj:'IN',rif:'MA',rjs:'NP',rkt:'BD',rmt:'IR',ru:'RU',rue:'UA',ryu:'JP',sa:'IN',sah:'RU',saz:'IN',sdh:'IR',sga:'IE',shi:'MA',shn:'MM',si:'LK',skr:'PK',smp:'IL',sou:'TH',sr:'RS',srb:'IN',srx:'IN',swb:'YT',swv:'IN',syl:'BD',syr:'IQ',ta:'IN',taj:'NP',tcy:'IN',tdd:'CN',tdg:'NP',tdh:'NP',te:'IN',th:'TH',thl:'NP',thq:'NP',thr:'NP',ti:'ET',tig:'ER',tkt:'NP',tsd:'GR',tsf:'NP',tsj:'BT',tt:'RU',tts:'TH',txg:'CN',tyv:'RU',udm:'RU',uga:'SY',uk:'UA',unx:'IN',ur:'PK',vai:'LR',wal:'ET',wbq:'IN',wbr:'IN',wni:'KM',wtm:'IN',wuu:'CN',xcr:'TR',xlc:'TR',xld:'TR',xmf:'GE',xmn:'CN',xmr:'SD',xna:'SA',xnr:'IN',xpr:'IR',xsa:'YE',xsr:'NP',yi:'001',zdj:'KM',zgh:'MA'
	}
}
function convertMeta(id: string) {
	var v: string;
	for (v in meta[id]) {
		const arr: string[] = meta[id][v].split(',');
		arr.map((l) => { meta[id][l] = v; });
	}
}
const conversions = ['type', 'scope', 'likelyScript'];
conversions.map(convertMeta);

export default function getMeta(o: any = {iso1: 'en'}) {
	// TODO if (typeof o === 'string') {}
	const id = o.iso1 || o.iso2 || o.iso3;
	const rank = meta.rank.indexOf(id);
	const low = (meta.speakersWorldPopulation/0.99)/1000;
	o.id = id;
	if (!o.nameT && !!o.name) { o.nameT = o.name; }
	o.names = (!o.names) ? [] : o.names.split(',');
	o.names.unshift(o.name); o.names.unshift(o.nameT);
	o.names.forEach((_n: string) => { (_n.indexOf('’') > -1) && o.names.push(_n.replace(/’/g,"'")) });
	//console.log(id, meta.likelyScript);
	const likely: any = {Latn:[]};
	var _o: any = {}, k: string;
	if (!!meta.likelyScriptCountry[id]) {
		_o = meta.likelyScriptCountry[id];
		for (k in _o) {
			if(!likely[k]) {likely[_o[k]] = [(k === '_') ? 'ZZ' : k];}
		}
	}
	if (!!meta.likelyScript[id]) {
		_o = meta.likelyScriptCountry[id];
		k = meta.likelyScript[id];
		if(!likely[k]) {likely[k] = [];}
	}
	for (k in likely) {
		const country = (meta[(k === 'Latn') ? 'likelyCountryLatin' : 'likelyCountry'][id]) || 'ZZ';
		if (likely[k].indexOf(country) < 0) { likely[k].push(country) }
	}
	o.locales = likely;
	o.common = (!!meta.common[id]);
	o.direction = (!!meta.rtl[id]) ? 'rtl' : 'ltr';
	o.type = (!!meta.type[id] && meta.type[id]) || 'living';
	o.scope = (!!meta.scope[id] && meta.scope[id]) || 'individual';
	o.speakers = { rank: rank, count: 0, percent: 0 };
	if (rank > -1) {
		const count = ((rank < meta.speakers.length) ? meta.speakers[rank] : low);
		o.speakers.percent = preciseRound(count/meta.speakersWorldPopulation*100);
		o.speakers.count = count * 1000000;
	}
	return o;
}
