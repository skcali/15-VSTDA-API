namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedToModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TodoItems", "Style", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.TodoItems", "Style");
        }
    }
}
