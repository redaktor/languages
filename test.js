//var txt = 'module OmniAuth\n  module Strategies\n    class Appnet < OmniAuth::Strategies::OAuth2\n\n      option :name, \'appnet\'\n\n      option :client_options, {\n        :site => \'https://alpha-api.app.net\',\n        :authorize_url => \'https://alpha.app.net/oauth/authenticate\',\n        :token_url => \'https://alpha.app.net/oauth/access_token\'\n      }\n\n      uid { raw_info[\'id\'] }\n\n      info do\n        data = raw_info[\'data\']\n        {\n          :nickname => data[\'username\'],\n          :name => data[\'name\'],\n          :image => data[\'avatar_image\'][\'url\'],\n          :type => data[\'type\'],\n          :counts => data[\'counts\']\n        }\n      end\n\n      extra do\n        { :raw_info => raw_info[\'data\'] }\n      end\n\n      def raw_info\n        @raw_info ||= access_token.get(\'stream/0/users/me\').parsed\n      end\n\n    end\n  end\nend\n';

//var txt = 'In 1775, he became convinced that the American cause was noble. In the United States, he was made a major general. He was wounded during the Battle of Brandywine and served with distinction in the Battle of Rhode Island. In 1781, troops in Virginia under his command blocked British forces, leading to the decisive Siege of Yorktown. Lafayette returned to France and was elected a member of the Estates-General of 1789. After the storming of the Bastille, he was made head of the National Guard, and tried to steer a middle course through the French Revolution. In August 1792, the radical factions ordered his arrest. Fleeing through Belgium, he was captured by Austrian troops and spent more than five years in prison. In 1824, President James Monroe invited Lafayette to the United States, where he met a rapturous reception. During France\'s July Revolution of 1830, he supported Louis-Philippe as king, but turned against him when the monarch became autocratic.'

//var txt = 'Die Herren von Waldeck waren ein Adelsgeschlecht, das im 12. Jahrhundert im Südschwarzwald nachgewiesen ist und dort im Kleinen Wiesental die Burgen Alt-Waldeck und Neu-Waldeck besaß. Der umfangreiche Besitz der Familie vor allem im Oberen und Kleinen Wiesental geht wahrscheinlich auf ihre Abstammung von einem Zweig der Hessonen zurück. In der ersten Hälfte des 12. Jahrhunderts schenkten zwei Zweige der Familie den Großteil ihres Besitzes an das Kloster St. Blasien und das Bistum Basel, die mutmaßlich letzte urkundliche Erwähnung eines Familienmitgliedes datiert aus dem Jahr 1166.';

//var txt = '悠久한 歷史와 傳統에 빛나는 우리 大韓國民은 3·1 運動으로 建立된 大韓民國臨時政府의 法統과 不義에 抗拒한 4·19 民主理念을 繼承하고, 祖國의 民主改革과 平和的統一의 使命에 立脚하여 正義·人道와 同胞愛로써 民族의 團結을 鞏固히 하고, 모든 社會的弊習과 不義를 打破하며, 自律과 調和를 바탕으로 自由民主的基本秩序를 더욱 確固히 하여 政治·經濟·社會·文化의 모든 領域에 있어서 各人의 機會를 均等히 하고, 能力을 最高度로 發揮하게 하며, 自由와 權利에 따르는 責任과 義務를 完遂하게 하여, 안으로는 國民生活의 均等한 向上을 基하고 밖으로는 恒久的인 世界平和와 人類共榮에 이바지함으로써 우리들과 우리들의 子孫의 安全과 自由와 幸福을 永遠히 確保할 것을 다짐하면서 1948年 7月 12日에 制定되고 8次에 걸쳐 改正된 憲法을 이제 國會의 議決을 거쳐 國民投票에 依하여 改正한다.' // KO

//var txt = '联合国的“和平使者”都是从艺术、文学、科学、娱乐和体育等领域精挑细选的杰出人士，他们同意协助联合国将全球的注意力集中到联合国的工作上来。这是秘书长授予 年世界盃足球賽是首屆國際男子足球世界盃足球賽。賽事在7月13日至7月30日於烏拉圭舉行。由於烏拉圭獨立100周年，以及該國的國家足球隊奪得1928年夏季奧運會金牌，國際足協（FIFA）決定將主辦權交給烏拉圭。所有賽事皆在烏拉圭首都蒙特維多舉行，主要賽事是在賽會為本屆賽事而建的世紀球場舉行。本屆賽事共有13支球隊參賽，其中7支來自南美洲、4支來自歐洲，2支來自北美洲。由於不少歐洲球隊認為遠赴南美洲參賽成本太高且浪費時間，因此本屆賽事只有少數歐洲球隊願意參賽。參賽球隊分成4組，每組的首名晉級準決賽。首兩場賽事同時进行，分別由法國隊和美國隊勝出。法国队以4:1擊敗墨西哥隊，美国队则以3:0击败比利時隊。洛朗為法國取得世界盃史上首個入球。阿根廷隊、烏拉圭隊、美國隊和南斯拉夫隊分列小組首名，進入準決賽。主辦國兼大熱門烏拉圭隊在93,000名觀眾見證下以4:2擊敗阿根廷隊，成為首屆世界盃冠軍。>> 阅读全文' // ZH

//var txt = '1975年8月に競走馬としてデビュー。関西のクラシック候補として注目を集め、額の流星[† 1]と栗毛の馬体の美しさから「流星の貴公子」と呼ばれた。クラシックでは無冠に終わったが、5歳時に天皇賞（春）と有馬記念（第22回有馬記念）を優勝した。後者のレースでトウショウボーイと繰り広げたマッチレース（2頭にグリーングラスを加えたTTGの三つ巴の戦いとして取り上げられることもある）は競馬史に残る名勝負のひとつといわれる。1978年1月に国外遠征に向けての壮行レース（第25回日本経済新春杯）中に骨折し、43日間におよぶ治療の末に死亡した。'

//var txt = 'एक अनन्त श्रेणी है जिसके व्यंजक क्रमानुगत धनात्मक संख्याएं होती हैं जिसके एकांतर चिह्न होते हैं। अनन्त श्रेणी के अपसरण का मतलब यह है कि इसके आंशिक योग का अनुक्रम (1, −1, 2, −2, ...) किसी परिमित मान की ओर अग्रसर नहीं होता है। बहरहाल, 18वीं शताब्दी के मध्य में लियोनार्ड आयलर 1 − 2 + 3 − 4 + · · · = 1⁄4 बताया। दशक 1980 के पूर्वार्द्ध में अर्नेस्टो सिसैरा, एमिल बोरेल तथा अन्यों ने अपसारी श्रेणियों को व्यापक योग निर्दिष्ट करने के लिए सुपरिभाषित विधि प्रदान की – जिसमें नवीन आयलर विधियों का भी उल्लेख था। इनमें से विभिन्न संकलनीयता विधियों द्वारा 1 − 2 + 3 − 4 + · · · का "योग" 1⁄4 लिख सकते हैं। सिसैरा-संकलन उन विधियों में से एक है जो 1 − 2 + 3 − 4 + ... का योग प्राप्त नहीं कर सकती, अतः श्रेणी एक ऐसा उदाहरण है जिसमें थोड़ी प्रबल विधि यथा एबल संकलन विधि की आवश्यकता होती है।';

//var txt = 'כל ישראל יש להם חלק לעולם הבא, שנאמר ועמך כולם צדיקים, לעולם יירשו ארץ, נצר מטעי מעשה ידי להתפאר.א.משה קיבל תורה מסיני ומסרה ליהושע, ויהושע לזקנים, וזקנים לנביאים, ונביאים מסרוה לאנשי כנסת הגדולה.הם אמרו שלושה דברים:הוו מתונים בדין, והעמידו תלמידים הרבה, ועשו סיג לתורה.ב.שמעון הצדיק היה משיירי כנסת הגדולה.הוא היה אומר:על שלושה דברים העולם עומד, על התורה ועל העבודה ועל גמילות חסדים.ג.אנטיגנוס איש סוכו קיבל משמעון הצדיק.הוא היה אומר:אל תהיו כעבדים המשמשין את הרב על מנת לקבל פרס, אלא הוו כעבדים המשמשין את הרב שלא על מנת לקבל פרס, ויהי מורא שמים עליכם.'

//var txt = 'je američki izumitelj, inženjer elektrotehnike i mašinstva, fizičar i futurist srpskog porijekla, najpoznatiji po doprinosu u dizajnu savremenog sistema napajanja naizmjeničnom strujom (AC). Tesla je dobio iskustvo u telefoniji i elektrotehnici prije selidbe u SAD 1884. godine da radi za Thomasa Edisona u New Yorku. On se uskoro osamostalio uz pomoć investitora, osnivajući laboratorije i kompanije za razvoj velikog opsega električnih uređaja. Njegov patentirani naizmjenični indukcijski motor i transformator licencirao je George Westinghouse, koji je također zaposlio Teslu nakratko kao konsultanta. Njegov rad u formativnim godinama razvoja elektične snage bio je uključen u korporativni AC/DC "Rat struja" kao i različitih borbi s patentima. Postao je naturalizirani građanin SAD-a 1891. godine.'

// correct path below ...
var Language = require('./build/Language/main').default;

var text = `Su vida estuvo marcada por el infortunio de contraer poliomielitis y
después por un grave accidente en su juventud que la mantuvo postrada en cama
durante largos periodos, llegando a someterse hasta a 32 operaciones quirúrgicas.`;
var language = new Language();

// var resultScript = language.detectScript(text); // only script
var result = language.detect(text);

//console.log( JSON.stringify(resultScript, null, 2) );
console.log( JSON.stringify(result, null, 2) );
console.log( '//' );
console.log( language.getNaturalMeta(result.natural[0].id) );
