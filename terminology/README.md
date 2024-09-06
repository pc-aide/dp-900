# terminology

---

## List
|n|name|desc.|O/P|
|-|----|-----|---|
|1|stuctured data||<img src="https://i.imgur.com/A1lvXzq.png">|
|2|semi-structured data|commonly encountered in varuous domains :<br/><br/>* social media feeds<br/>* sensor data from IoT device<br/>* log files<br/><br/>businesses can capture & store diverse data sources that may have evolving schemas or complex relations<br/><br/>you can use as NoSQL databases<br/><br/>These databases, such as<br/><br/>* Azure Cosmos DB<br/><br/>making them suitable for handling diverse data formats & evolving schemas|<img src="https://i.imgur.com/ZcIuxpR.png">|
|3|unstructured data|It includes data in its rawest form, such as:<br/><br/>* text documents<br/>&ensp;* emails<br/>&ensp;* news articles<br/>&ensp;* social media posts<br/>&ensp;* images:<br/>&ensp;&ensp;* photographs<br/>&ensp;&ensp;* scanned documents<br/>&ensp;&ensp;* audio recordings<br/>&ensp;&ensp;* videos<br/>* images<br/>* audio files<br/>* videos<br/>* & more<br/><br/>Managing & deriving value from unstructured data requires specialized tools & techniques. Technologies such as :<br/><br/>* natural language processing (NLP)<br/>* image recognition<br/>* **audio transcription play** a significant role in analyzing & extracting meaningfull information from unstructured data sources<br/><br/>However, its sheer volume & lack of predefined structure pose significant challenges in terms of **storage**, **processing**, & **analysis**|<img src="https://i.imgur.com/aBy7YNH.png">|
|4|delimited file formats|comma-separated values(CSV)<br/><br/>comma (or **delimiter**) acts as a marker to distinguish one field fro the other|<img src="https://i.imgur.com/Rue2Nts.png">|
|5|file format|json<br/>xml<br/>parquet<br/><br/><ins>Parquet file format</ins><br/>Parquet is a collumnar storage file format designed for efficient data **processing** & **analytics** in **big data* environment. It provides a highly optimized & compressed representation fo structured data, making it well-suited for handling large dataset.<br/><br/>Parquet is widely adopted in big data processing frameworks such as **Apache Hadoop** & **Apache Spark**<br/><br/><ins>advantages</ins>:<br/>storage format reduces disk I/O & improves query performance, especially when queries involve only a subset of columns.<br/> * advanced compression techniques, such as run-lenght encoding (RLE) & dictionary encoding|xml file format:<br/><img src="https://i.imgur.com/je0dI0r.png"><br/><br/>parquet file format:<br/><img src="https://i.imgur.com/bUKFNws.png">|
|6|SQL dialects|<ins>MariaDB</ins><br/>MariaDB (open-source) is a fork of MySQL created by the original developers of MySQL, and it’s intended to remain open-source. MariaDB is designed to be highly compatible with MySQL, meaning that, in most cases, data and code can be switched seamlessly between the two. MariaDB includes more storage engines than MySQL, and it includes several features not found in MySQL.<br/><br/><ins>PL/SQL</ins><br/>Procedural Language/SQL, a dialect developed by Oracle<br/><br/><ins>Transact-SQL(T-SQL)</ins><br/>This is Microsoft's proprietary extension of SQL, which includes a set of programmable functions & procedural programming. T-SQL is primarily used with Microsoft SQL Server<br/><br/><ins>MySQL</ins><br/>MySQL (open-source) uses a dialect of SQL that is rich in function, including string processing, date & time processing, & advanced features such as replication & partitioning<br/><br/><ins>PostgreSQL</ins><br/>PostgreSQL (open-source), supports a version of SQL that includes many features not available in other database systems, such as window functions & common table expressions|
|7|Azure Synapse Analytics|Formerly SQL Data **Warehouse**, Azure Synapse Analytics is an analytics service that brings together big data and data warehousing. It gives you the freedom to query data on your terms, using serverless on-demand or provisioned resources.|
|8|Azure SQL Server|IaaS|
|9|Azure SQL Managed Instance|PaaS|<img src="https://i.imgur.com/Dw63q1Q.png"><br/>what is sql managed instance:<br/><img src="https://i.imgur.com/mpHp82h.png">|
|10|Azure SQL Edge|zure SQL Edge is an optimized relational database engine geared toward Internet of Things (**IoT**) and edge computing scenarios. It offers a small footprint that can run a variety of devices from low-power edge devices to high-performance edge servers|<img src="https://i.imgur.com/MX0T3wY.png">|
|11|Azure SQL Database|PaaS|
|12|Azure Database for MySQL||
|13|NoSQL|NoSQL in Azure refers to a category of database management systems that do not use a traditional relational database model. Instead of relying on fixed schema tables and rows, NoSQL databases use flexible schemas, allowing them to handle large volumes of diverse data types such as structured, semi-structured, and unstructured data. These databases are designed for scalability, high performance, and to support large-scale, distributed applications.<br/><br/><ins>Azure Cosmos DB</ins><br/>A fully managed, globally distributed NoSQL database service that supports multiple data models, including document, key-value, graph, and column-family. Cosmos DB offers multi-master replication, guara<br/><br/><ins>Azure Table Storage</ins><br/>A NoSQL key-value store that provides a simple and cost-effective solution for storing large amounts of structured, non-relational data. It is often used for applications that require scalable storage, like web applications, configuration settings, or user session data.<br/><br/><ins>Azure Cache for Redis</ins><br/>Although primarily a caching solution, Redis on Azure can also serve as a NoSQL key-value store. It supports a variety of data structures such as strings, hashes, lists, sets, and more, offering in-memory storage for high-speed access|
|14|azure data lake storage gen2|
|15|storage account||options:<br/><img src="https://i.imgur.com/bp1A4bv.png"><br/>flowchart of the security features:<br/><img src="https://i.imgur.com/6cZFcpx.png"><br/>Scalability potential of azure storage account:<br/><img src="https://i.imgur.com/ZrJ5eKq.png">|
|16|POSIX-compliant ACLs|
|17|Azure Databricks|
|18|Azure Data Factory|
|19|Azure File Sync|
|20|Cassandra API|
|21|Gremlin API|
|22|Azure HDInsight|
|23|MongoDB API|
|24|Table API|
|25|Turnkey Global Distribution|
|26|Power BI||Data journey from Azure data sources to visualization to Power BI:<br/><img src="https://i.imgur.com/gUPpfVh.png">|
|27|Azure Analysis Services|
|28|data types||<img src="https://i.imgur.com/PkCsvSR.png">|
|29|ETL||<img src="https://i.imgur.com/lB45r9y.png">|
|30|ELT||<img src="https://i.imgur.com/lRKSOpl.png">|
|31|Data Pipeline|
|32|Microsoft Fabric|SaaS|
|33|Batch data||Batch processing vs Streaming processing:<br/><img src="https://raw.githubusercontent.com/pc-aide/dp-900/main/terminology/batch%20prcessing%20vs%20stream%20processing.png">|
|34|Streaming data|
|35|Azure Data Explorer (ADX) Cluster|
|36|Spark Structured Streaming|
|37|Start Schema||<img src="https://i.imgur.com/bPK2fK9.png">|
|38|Snowflake schema||<img src="https://i.imgur.com/PTQzCKn.png">|
|39|transactional solutions|Transactional database are used by system for basic opeations :<br/>* creating<br/>* reading<br/>* updating<br/>* deleting<br/><br/>A transactional database is commonly known as online transaction processing (**OLTP**) considering that this type of database serves online transactional operations between the application & the database|<img src="https://i.imgur.com/wmbqvrV.png">|
|40|analytical solutions|Analytical databases use a process called online analytical processing (**OLAP**) & have undergone a grat evolution in recent year with the emergence of data warehouse & big data platforms||
|41|Roles and responsibilities for data workloads|<ins>Database administrator (DBA)</ins><br/><br/><ins>Data engineer</ins><br/><br/><ins>Data analyst</ins>|
|42|key-value database|no predefined schema, tables, or columns, & no relationships between the entities|<img src="https://i.imgur.com/k1x6Wnt.png">|
|43|graph database|A graph database contains **nodes**(object information) & **edges**(object relationship information)|<img src="https://i.imgur.com/Lj1rvyt.png">|
|44|unstructured data|such as **audio,videos,image, or binary records** without a defined organization<br/><br/>it's common, for example, for unstructured data such as **audio** to be **transcribed** using **artificial intelligence**, generating a mass of semi-structured data for processing|
