using NHibernate.Cfg;
using NHibernate.Tool.hbm2ddl;
using RentACarRESTGen.Infraestructure.EN.RentACarREST;
using System;


namespace InitializeDB
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("-----------------------------------------------------------------------------");
            Console.WriteLine("A new database called: RentACarRESTGenNHibernate will be created (the previous information will be deleted).");
            System.Console.WriteLine("-----------------------------------------------------------------------------");
            System.Console.WriteLine("Are you sure?(Y/N) ");
            String ans = Console.ReadLine();
            try
            {
                if (ans.ToLower() == "y")
                {
                    CreateDB.Create("RentACarRESTGenNHibernate", "nhibernateUser", "nhibernatePass");
                    var cfg = new Configuration();
                    cfg.Configure();
                    cfg.AddAssembly(typeof(ClienteNH).Assembly);
                    new SchemaExport(cfg).Execute(true, true, false);
                    System.Console.WriteLine("-----------------------------");
                    System.Console.WriteLine("Database schema created successfully");
                    System.Console.WriteLine("-----------------------------");
                }
                /*PROTECTED REGION ID(initializeData) ENABLED START*/
                System.Console.WriteLine("-------------------------------------------------------");
                System.Console.Write("Do you want to initialize the data of your database?(Y/N) ");
                ans = System.Console.ReadLine();
                if (ans.ToLower() == "y")
                {
                    CreateDB.InitializeData();
                    System.Console.WriteLine("-----------------------------------------");
                    System.Console.WriteLine("The data has been inserted successfully!!");
                    System.Console.WriteLine("-----------------------------------------");
                }
                /*PROTECTED REGION END*/
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message.ToString() + '\n' + e.StackTrace);
            }

            finally
            {
                System.Console.WriteLine("Powered by OOH4RIA. Press any key to exit....");
                Console.ReadLine();
            }
        }
    }
}
