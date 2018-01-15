-- MySQL dump 10.13  Distrib 5.6.30, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: unicorn-timetable
-- ------------------------------------------------------
-- Server version	5.6.30-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_of_week` varchar(255) DEFAULT NULL,
  `lecturer_name` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkhwfqb4rahpl3q2w4jw5k7jlp` (`course_id`),
  CONSTRAINT `FKkhwfqb4rahpl3q2w4jw5k7jlp` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'MONDAY','Gordon Bell','105',1,2),(2,'THURSDAY','Peter Bernus','105',5,6),(3,'THURSDAY','Sue Black','106',1,7),(4,'MONDAY','Lompard Ararat','107',2,3),(5,'MONDAY','Corrado Bohm','108',3,4),(6,'MONDAY','Jonathan Bowen','109',4,5),(7,'FRIDAY','Lee Calcote','110',1,1),(8,'WEDNESDAY','Gregory Chaitin','105',4,10),(9,'FRIDAY','Alonzo Church','110',2,1),(10,'TUESDAY','John Cocke','107',2,8),(11,'FRIDAY','Edgar F. Codd','110',3,1),(12,'TUESDAY','Andries van Dam','111',3,9),(13,'FRIDAY','Peter J. Denning ','110',4,1),(14,'FRIDAY','Annie J. Easley','110',5,1),(15,'WEDNESDAY','Gregory Chaitin','105',4,11),(16,'WEDNESDAY','Gregory Chaitin','105',5,12),(17,'WEDNESDAY','Gregory Chaitin','105',6,13),(18,'WEDNESDAY','Gregory Chaitin','105',7,14);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `syllabus` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'Website development','IWWW','Web development is a broad term for the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications (or just \'web apps\') electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development. Among web professionals, \"web development\" usually refers to the main non-design aspects of building web sites: writing markup and coding. Most recently Web development has come to mean the creation of content management systems or CMS. These CMS can be made from scratch, proprietary or open source. In broad terms the CMS acts as middleware between the database and the user through the browser. A principle benefit of a CMS is that it allows non-technical people to make changes to their web site without having technical knowledge.'),(2,'E-commerce','ECOM','E-commerce is a transaction of buying or selling online. Electronic commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. Modern electronic commerce typically uses the World Wide Web for at least one part of the transaction\'s life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of online books (such as Amazon) and music purchases (music download in the form of digital distribution such as iTunes Store), and to a less extent, customized/personalized online liquor store inventory services.[1] There are three areas of e-commerce: online retailing, electric markets, and online auctions. E-commerce is supported by electronic business.['),(3,'Computer programming','PRG','Computer programming (often shortened to programming) is a process that leads from an original formulation of a computing problem to executable computer programs. Programming involves activities such as analysis, developing understanding, generating algorithms, verification of requirements of algorithms including their correctness and resources consumption, and implementation (commonly referred to as coding[1][2]) of algorithms in a target programming language. Source code is written in one or more programming languages. The purpose of programming is to find a sequence of instructions that will automate performing a specific task or solving a given problem. The process of programming thus often requires expertise in many different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.'),(4,'Software engineering','SWE','Typical formal definitions of software engineering include:\n\n\"the systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software\"—The Bureau of Labor Statistics—IEEE Systems and software engineering - Vocabulary[4]\n\"The application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software\"—IEEE Standard Glossary of Software Engineering Terminology[5]\n\"an engineering discipline that is concerned with all aspects of software production\"—Ian Sommerville[6]\n\"the establishment and use of sound engineering principles in order to economically obtain software that is reliable and works efficiently on real machines\"—Fritz Bauer[7]\n'),(5,'Software maintenance','SWM','Software maintenance in software engineering is the modification of a software product after delivery to correct faults, to improve performance or other attributes.[1]\n\nA common perception of maintenance is that it merely involves fixing defects. However, one study indicated that over 80% of maintenance effort is used for non-corrective actions.[2] This perception is perpetuated by users submitting problem reports that in reality are functionality enhancements to the system.[citation needed] More recent studies put the bug-fixing proportion closer to 21%.[3]'),(6,'Software modernization','SWEV','Legacy modernization, or software modernization, refers to the conversion, rewriting or porting of a legacy system to a modern computer programming language, software libraries, protocols, or hardware platform. Legacy transformation aims to retain and extend the value of the legacy investment through migration to new platforms.[1]\n\n'),(7,'Architecture-driven modernization\n','ADM','Architecture-driven modernization is the name of the initiative of the Object Management Group (see OMG ADM Task Force website) related to building and promoting standards that can be applied to modernize legacy systems. The objective of this initiative is to provide standard representations of views of existing systems in order to enable common modernization activities, such as code analysis and comprehension, and software transformation.\n\n'),(8,'Knowledge Discovery Metamodel\n','KDM','Knowledge Discovery Metamodel (KDM) is a publicly available specification from the Object Management Group (OMG). KDM is a common intermediate representation for existing software systems and their operating environments, that defines common metadata required for deep semantic integration of Application Lifecycle Management tools. KDM was designed as the OMG\'s foundation for software modernization, IT portfolio management and software assurance. KDM uses OMG\'s Meta-Object Facility to define an XMI interchange format between tools that work with existing software as well as an abstract interface (API) for the next-generation assurance and modernization tools. KDM standardizes existing approaches to knowledge discovery in software engineering artifacts, also known as software mining.\n\n'),(9,'Ontology','ONT','In computer science and information science, an ontology is a formal naming and definition of the types, properties, and interrelationships of the entities that really exist in a particular domain of discourse.\n\nAn ontology (in information science) compartmentalizes the variables needed for some set of computations and establishes the relationships between them.[1][2]\n\nThe fields of artificial intelligence, the Semantic Web, systems engineering, software engineering, biomedical informatics, library science, enterprise bookmarking, and information architecture all create ontologies to limit complexity and organize information. The ontology can then be applied to problem solving.\n\nThe knowledge density of a knowledge graph is the average number of attributes and binary relations issued from a given entity, and is commonly measured in facts per entity.[3]'),(10,'Software testing','SWT','Software testing is an investigation conducted to provide stakeholders with information about the quality of the software product or service under test.[1] Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation. Test techniques include the process of executing a program or application with the intent of finding software bugs (errors or other defects), and verifying that the software product is fit for use.\n\nSoftware testing involves the execution of a software component or system component to evaluate one or more properties of interest. In general, these properties indicate the extent to which the component or system under test'),(11,'Scalability','SCAL','Scalability is the capability of a system, network, or process to handle a growing amount of work, or its potential to be enlarged to accommodate that growth.[1] For example, a system is considered scalable if it is capable of increasing its total output under an increased load when resources (typically hardware) are added. An analogous meaning is implied when the word is used in an economic context, where a company\'s scalability implies that the underlying business model offers the potential for economic growth within the company.'),(12,'Usability','USA','Usability is the ease of use and learnability of a human-made object such as a tool or device.[1] In software engineering, usability is the degree to which a software can be used by specified consumers to achieve quantified objectives with effectiveness, efficiency, and satisfaction in a quantified context of use.[2]\n\nThe object of use can be a software application, website, book, tool, machine, process, vehicle, or anything a human interacts with. A usability study may be conducted as a primary job function by a usability analyst or as a secondary job function by designers, technical writers, marketing personnel, and others. It is widely used in consumer electronics, communication, and knowledge transfer objects (such as a cookbook, a document or online help) and mechanical objects such as a door handle or a hammer.'),(13,'Facility management','FM','Professional FM as an interdisciplinary business function has the objective to coordinate demand and supply of facilities and services within public and private organizations. The term “Facility” (pl. facilities) means something that is built, installed or established to serve a purpose,[1] which, in general, is every “Tangible asset that supports an organization.”[2] Examples are real estate property, buildings, technical infrastructure, (HVAC), lighting, transportation, IT-services, furniture, Custodial, grounds, and other user-specific equipment and appliances.\n\nThe European standard for facilities management defines it as \"the integration of processes within an organization to maintain and develop the agreed services which support and improve the effectiveness of its primary activities.\"\n\n'),(14,'Project management\n','PM','Project management is the discipline of initiating, planning, executing, controlling, and closing the work of a team to achieve specific goals and meet specific success criteria at the specified time. A project is a temporary endeavor designed to produce a unique product, service or result with a defined beginning and end (usually time-constrained, and often constrained by funding or staffing) undertaken to meet unique goals and objectives, typically to bring about beneficial change or added value.[1][2] The temporary nature of projects stands in contrast with business as usual (or operations),[3] which are repetitive, permanent, or semi-permanent functional activities to produce products or services. In practice, the management of such distinct production approaches requires the development of distinct technical skills and management strategies.[4]\n\n');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrollment`
--

DROP TABLE IF EXISTS `enrollment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enrollment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classes_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKg794xaovcfot3s388nk5g9bap` (`classes_id`),
  KEY `FKio7fsy3vhvfgv7c0gjk15nyk4` (`student_id`),
  CONSTRAINT `FKg794xaovcfot3s388nk5g9bap` FOREIGN KEY (`classes_id`) REFERENCES `classes` (`id`),
  CONSTRAINT `FKio7fsy3vhvfgv7c0gjk15nyk4` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrollment`
--

LOCK TABLES `enrollment` WRITE;
/*!40000 ALTER TABLE `enrollment` DISABLE KEYS */;
INSERT INTO `enrollment` VALUES (1,10,1),(2,7,1),(3,2,1),(4,15,1),(5,17,1),(6,12,1),(7,13,3),(8,9,3),(9,4,3),(10,12,3),(11,17,3),(12,15,3),(13,7,4),(14,11,4),(15,1,4),(16,4,4),(17,5,4),(18,3,4),(19,2,4),(20,5,5),(21,3,5),(22,16,5),(23,10,5),(24,15,5),(25,18,5),(26,17,5),(27,9,6),(28,14,6),(29,4,6),(30,10,6),(31,12,6),(32,16,6),(33,5,6),(34,18,6),(35,1,7),(36,7,7),(37,2,7),(38,10,7),(39,17,7),(40,18,7),(41,15,7),(42,6,8),(43,4,8),(44,3,8),(45,8,8),(46,15,8),(47,17,8),(48,9,9),(49,7,9),(50,2,9),(51,6,9),(52,8,9),(53,16,9),(54,3,10),(55,12,10),(56,16,10),(57,7,10),(58,9,10),(59,11,10),(60,17,10),(61,10,11),(62,6,11),(63,7,11),(64,2,11),(65,16,11),(66,15,11);
/*!40000 ALTER TABLE `enrollment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `is_active` bit(1) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'marian.labuda@seznam.cz','Marian','','Labuda','mlabuda'),(3,'brus.willis@gmail.com','Bruce','','Willis','bwillis'),(4,'itrojkan@email.cz','Ivan','','Trojan','itrojak'),(5,'kroden@hood.com','Karel','','Roden','kroden'),(6,'labus@labus.org','Jiri','','Labus','jlabus'),(7,'bolek@polivka.com','Bolek','','Polivka','bpolivka'),(8,'jan@kraus.cz','Jan','','Kraus','jkraus'),(9,'mvasut@roden.cz','Marek','','Vasut','mvasut'),(10,'jmach@seznam.cz','Jiri','','Machacek','jmachacek'),(11,'marek@eben.com','Marek','','Eben','meben');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-15 10:33:56
