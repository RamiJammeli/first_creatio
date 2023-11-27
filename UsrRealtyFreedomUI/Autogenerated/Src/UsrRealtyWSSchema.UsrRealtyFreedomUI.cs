namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyWSSchema

	/// <exclude/>
	public class UsrRealtyWSSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyWSSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyWSSchema(UsrRealtyWSSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("773b2ccd-309a-47a8-84fe-108e7492b750");
			Name = "UsrRealtyWS";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b173efff-3410-4a83-a0e7-0f41f59f9f35");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,0,0,69,207,108,233,1,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("773b2ccd-309a-47a8-84fe-108e7492b750"));
		}

		#endregion

	}

	#endregion

}

