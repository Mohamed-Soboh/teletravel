import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <div dir="rtl" className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-r-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            אודות
          </h1>
          <p>
          TELETRAVER הינה חברת תיירות בישראל
החברה פועלת בכמה מישורים:
נופש בחו"ל, נופש בישראל, ומחלקת תיירות נכנסת.

חו"ל
מחלקת חו"ל מתמחה בטיסות שכר (צ'ארטר) לחו"ל, חבילות נופש, טיולים מאורגנים והזמנת מלונות.
כמו כן, המחלקה מוכרת חבילות ספורט והופעות,  חבילות לנישואין אזרחיים, חבילות של טיסה ורכב (טוס וסע), וחבילות של טיסה, רכב ובית מלון (טוס, סע ומלון).
חבילת הנופש מורכבת מטיסה, בית מלון, העברות הלוך וחזור מ/ אל שדה התעופה, 

יעדי TELETRAVER: ברצלונה, מדריד, קוסטה ברווה, רומא, ורונה, ונציה, מילאנו, אגם גארדה, זגרב, ברלין, מינכן, פריז, בריסל, מוסקבה, אמסטרדם, ורנה, בורגס, בוקרשט, אתונה, רודוס, כרתים, קוס, איה נאפה, בודפשט, פראג, ברטיסלבה, אנטליה ויעדים נוספים.
          </p>
          <br />
          <p>
          אופן ההזמנה מתבצע באמצעות שליחת הודעה לטלפונים הבאים </p>
          <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <a href="http://wa.me/+9720524296572">0524296572</a>
                <a href="http://wa.me/+9720552687587">0552687587</a>
                
              </div>
              <p>ובקרוב תוכלו להזמין דרך האתר</p>
        </div>
      </div>
      <Location />
      
    </>
  );
};

export default About;
