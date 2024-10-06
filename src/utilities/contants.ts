// Scenario 1: Etihad Airways
export const etihadAirwaysData: any = {
  entity: {
    name: "Etihad Airways",
    remarks: "",
  },
  shareholders: [
    {
      name: "Gov of Abu Dhabi",
      owned: "100%",
      remarks: "Owns Ethihad Aviation Group",
      isUltimate: true,
      isDirect: false,
    },
    {
      name: "Etihad Aviation Group",
      owned: "100%",
      remarks: "",
      isUltimate: false,
      isDirect: true,
    },
  ],
  subsidiaries: [
    {
      name: "Etihad Engineering",
      owned: "100%",
      remarks: "",
    },
    {
      name: "Etihad Airport Services - Ground LLC",
      owned: "100%",
      remarks: "",
    },
    {
      name: "Etihad Airport Services - Catering LLC",
      owned: "100%",
      remarks: "",
    },
    {
      name: "Etihad Airport Services - Cargo LLC",
      owned: "100%",
      remarks: "",
    },
    {
      name: "Etihad Flight College",
      owned: "100%",
      remarks: "",
    },
    {
      name: "EAG Investments Holdings Co",
      owned: "100%",
      remarks: "",
    },
  ],
};

// Scenario 2: China Eastern
export const chinaEasternData: any = {
  entity: {
    name: "China Eastern Airlines Corporation Limited",
    remarks: "",
  },
  shareholders: [
    {
      name: "China Eastern Air Holding Company Limited",
      owned: "39.06%",
      remarks: "",
      isUltimate: false,
      isDirect: false,
    },
    {
      name: "CES Finance Holdings",
      owned: "2.05%",
      remarks: "",
      isUltimate: false,
      isDirect: false,
    },
    {
      name: "CES Global Holdings",
      owned: "11.78%",
      remarks: "",
      isUltimate: false,
      isDirect: false,
    },
  ],
  subsidiaries: [],
};

// Scenario 3: Air France
export const airFranceData: any = {
  entity: {
    name: "Air France SA",
    remarks: "",
  },
  shareholders: [
    {
      name: "Air France-KLM Group",
      owned: "100%",
      remarks: "Listed entity",
      isUltimate: false,
      isDirect: false,
    },
  ],
  subsidiaries: [
    {
      name: "Hop!",
      owned: "100%",
      remarks: "",
    },
    {
      name: "Transavia France (LCC)",
      owned: "96%",
      remarks: "",
    },
  ],
};

// Example1
export const example1: any = {
  entity: {
    name: "TUI Travel Aviation Finance Limited",
    remarks: "",
  },
  shareholders: [],
  subsidiaries: [
    {
      name: "TUI Airlines Nederlands B.V",
      owned: "100%",
      remarks: "",
    },
    {
      name: "TUI AIRWAYS",
      owned: "100%",
      remarks: "",
    },
    {
      name: "TUIFLY NORDIC AB",
      owned: "100%",
      remarks: "",
    },
    {
      name: "TUI AIRLINES NEDERLAND",
      owned: "100%",
      remarks: "",
    },
    {
      name: "TUIFLY NORDIC AB",
      owned: "100%",
      remarks: "",
    },
    {
      name: "TUI AIRWAYS LIMITED",
      owned: "100%",
      remarks: "",
    },
    {
      name: "TUIFLY GMBH",
      owned: "100%",
      remarks: "",
    },
  ],
};

// Example2
export const example2: any = {
  entity: {
    name: "JetSMART Holdings Limited",
    remarks: "",
  },
  shareholders: [{
    name: "Indigo Andean Partners, LP",
    owned: "100%",
    remarks: "",
  },],
  subsidiaries: [
    {
      name: "Indigo Argentia Partners",
      owned: "100%",
      remarks: "",
    },
    {
      name: "JetSMART Airlines Peru S.A.C",
      owned: "100%",
      remarks: "",
    },
    {
      name: "JetSMART Airlines Spa",
      owned: "100%",
      remarks: "",
    },
    {
      name: "Andean Aircraft Leasing Limited",
      owned: "100%",
      remarks: "",
    },
  ],
};

// Example3
export const example3: any = {
  entity: {
    name: "US Bangla Airlines Ltd",
    remarks: "",
  },
 
  shareholders: [
    {
      name: "Mahboob Dhali",
      owned: "4%",
      remarks: "",
    },
    {
      name: "Mohammed Abdullah AI Mamum",
      owned: "17%",
      remarks: "",
    },
    {
      name: "US-Bangla Assets Ltd",
      owned: "66%",
      remarks: "",
    },
    {
      name: "Tofazzal Hossain Dhali",
      owned: "1%",
      remarks: "",
    },
    {
      name: "Dilruba Parvin",
      owned: "11%",
      remarks: "",
    },
    {
      name: "Mohammed Abdullah AI Mamun",
      owned: "",
      remarks: "",
      isUltimate: true,
      isDirect: false,
    },
    {
      name: "Md Nazrul Islam",
      owned: "",
      remarks: "",
      isUltimate: true,
      isDirect: false,
    },
    {
      name: "Mahboob Dhali",
      owned: "",
      remarks: "",
      isUltimate: true,
      isDirect: false,
    },
  ],
  subsidiaries: [],
};

interface WorkflowItem {
  action: string;
  date: string;
  time: string;
  timezone: string;
  attachment?: string; // optional, since not all items have an attachment
}

export const workflowTimeline: WorkflowItem[] = [
  {
    action: "Adeline Lim approved financials",
    date: "01/02/2024",
    time: "12:33pm",
    timezone: "SGT",
  },
  {
    action: "Ethan Tan reselected Adeline Lim as reviewer",
    date: "10/01/2024",
    time: "12:33pm",
    timezone: "SGT",
  },
  {
    action: "Ethan Tan submitted workflow to Hugh O’Brien for review (annual review)",
    date: "10/01/2024",
    time: "12:33pm",
    timezone: "SGT",
  },
  {
    action: "Ethan Tan submitted workflow to Adeline Lim for review",
    date: "01/01/2024",
    time: "10:33pm",
    timezone: "SGT",
    attachment: "creditassessment.pdf",
  },
  {
    action: "Ethan Tan started editing (rating)",
    date: "01/01/2024",
    time: "10:33pm",
    timezone: "SGT",
  },
  {
      action: "Ethan Tan started editing (rating)",
      date: "01/01/2024",
      time: "10:33pm",
      timezone: "SGT",
    },
    {
      action: "Ethan Tan started editing (rating)",
      date: "01/01/2024",
      time: "10:33pm",
      timezone: "SGT",
    }
];

export const reviewers = [
  {
    label: 'Adeline Lim',
    key: '1',
  },
  {
    label: 'Ethan Tan',
    key: '2',
  },
  {
    label: 'Hugh O’Brien',
    key: '3',
  },
  {
    label: 'John Doe',
    key: '4',
  },
];

export const front_end_config =[
  {
    "id": 1,
    "type_category_item_id": "general__general__type",
    "label": "Type",
    "data_type": "string"
  },
  {
    "id": 2,
    "type_category_item_id": "general__general__consolidation_status",
    "label": "Consolidation status",
    "data_type": "string"
  },
  {
    "id": 3,
    "type_category_item_id": "general__general__accounting_standard",
    "label": "Accounting standard",
    "data_type": "string"
  },
  {
    "id": 4,
    "type_category_item_id": "general__general__lease_accounting",
    "label": "Lease accounting",
    "data_type": "string"
  },
  {
    "id": 5,
    "type_category_item_id": "general__general__audit_method",
    "label": "Audit method",
    "data_type": "string"
  },
  {
    "id": 6,
    "type_category_item_id": "general__general__reporting_currency",
    "label": "Reporting currency",
    "data_type": "string"
  },
  {
    "id": 7,
    "type_category_item_id": "general__general__fx_rate",
    "label": "FX rate",
    "data_type": "float"
  },
  {
    "id": 8,
    "type_category_item_id": "general__general__qualification",
    "label": "Qualification",
    "data_type": "string"
  },
  {
    "id": 9,
    "type_category_item_id": "general__general__auditor",
    "label": "Auditor",
    "data_type": "string"
  },
  {
    "id": 10,
    "type_category_item_id": "profit_and_loss__revenue__revenue",
    "label": "Revenue",
    "data_type": "float",
    "is_read_only": 1,
    "is_label_bold": 1,
    "has_divider_above": 1
  },
  {
    "id": 11,
    "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
    "label": "Pax Revenue",
    "data_type": "float"
  },
  {
    "id": 12,
    "type_category_item_id": "profit_and_loss__revenue__cargo_revenue",
    "label": "Cargo Revenue",
    "data_type": "float"
  },
  {
    "id": 13,
    "type_category_item_id": "profit_and_loss__revenue__other_revenue",
    "label": "Other Revenue",
    "data_type": "float"
  },
  {
    "id": 14,
    "type_category_item_id": "profit_and_loss__revenue__total_cargo_and_other_revenue",
    "label": "Total Cargo & Other Revenue",
    "data_type": "float",
    "is_read_only": 1,
    "has_divider_above": 1
  },
  {
    "id": 15,
    "type_category_item_id": "profit_and_loss__revenue__total_revenue",
    "label": "Total Revenue",
    "data_type": "float",
    "is_read_only": 1,
    "is_label_bold": 1,
    "has_divider_above": 1
  },
  {
    "id": 16,
    "type_category_item_id": "profit_and_loss__revenue__pct_inc_dec_to_previous_period",
    "label": "% inc / (dec) to previous period",
    "data_type": "percent",
    "is_read_only": 1,
    "is_label_bold": 1
  },
  {
      "id": 17,
    "type_category_item_id": "profit_and_loss__operating_expense__operating_expense",
    "label": "Operating expense",
    "data_type": "float",
    "is_read_only": 1,
    "is_label_bold": 1,
    "has_divider_above": 1
  },
  {
      "id": 18,
    "type_category_item_id": "profit_and_loss__operating_expense__employee_costs",
    "label": "Employee Costs",
    "data_type": "float"
  },
  {
      "id": 19,
    "type_category_item_id": "profit_and_loss__operating_expense__fuel_and_oil",
    "label": "Fuel and oil",
    "data_type": "float"
  },
  {
      "id": 20,
    "type_category_item_id": "profit_and_loss__operating_expense__maintenance_materials_and_engineering",
    "label": "Maintenance, materials & engineering",
    "data_type": "float"
  },
  {
      "id": 21,
    "type_category_item_id": "profit_and_loss__operating_expense__landing_fees_en_route_and_other_variants",
    "label": "Landing fees, en route & other variants",
    "data_type": "float"
  },
  {
      "id": 22,
    "type_category_item_id": "profit_and_loss__operating_expense__selling_and_distribution_charges",
    "label": "Selling & distribution charges",
    "data_type": "float"
  },
  {
      "id": 23,
    "type_category_item_id": "profit_and_loss__operating_expense__other_ebitdar_expenses",
    "label": "Other EBITDAR expenses",
    "data_type": "float"
  },
  {
      "id": 24,
    "type_category_item_id": "profit_and_loss__operating_expense__other_operating_expenses",
    "label": "Other operating expenses",
    "data_type": "float"
  },
  {
      "id": 25,
    "type_category_item_id": "profit_and_loss__operating_expense__total_ebitdar_expenses",
    "label": "Total EBITDAR Expenses",
    "data_type": "float",
    "is_read_only": 1,
    "is_label_bold": 1,
    "has_divider_above": 1
  },
  {
      "id": 26,
    "type_category_item_id": "profit_and_loss__operating_expense__pct_inc_dec_to_previous_period",
    "label": "% inc / (dec) to previous period",
    "data_type": "percent",
    "is_read_only": 1,
    "is_label_bold": 1
  },
  {
      "id": 27,
    "type_category_item_id": "profit_and_loss__ebit__ebitdar",
    "label": "EBITDAR",
    "data_type": "float",
    "is_label_bold": 1,
    "has_divider_above": 1
  },
  {
      "id": 28,
    "type_category_item_id": "profit_and_loss__ebit__aircraft_rental_expense",
    "label": "Aircraft_rental_expense",
    "data_type": "float"
  },
  {
      "id": 29,
    "type_category_item_id": "profit_and_loss__ebit__ebitda",
    "label": "EBITDA",
    "data_type": "float",
    "is_label_bold": 1
  },
  {
      "id": 30,
    "type_category_item_id": "profit_and_loss__ebit__depreciation_and_amortisation",
    "label": "Depreciation & Amortisation",
    "data_type": "float"
  },
  {
      "id": 31,
    "type_category_item_id": "profit_and_loss__ebit__ebit_before_non_operating_items",
    "label": "EBIT before Non-Operating Items",
    "data_type": "float",
    "is_label_bold": 1
  },
  {
      "id": 32,
    "type_category_item_id": "profit_and_loss__ebit__dividends_and_share_of_profits_losses",
    "label": "Dividends and share of profits (losses)",
    "data_type": "float"
  },
  {
      "id": 33,
    "type_category_item_id": "profit_and_loss__ebit__profit_loss_from_disposal_of_assets",
    "label": "Profit (loss) from disposal of assets",
    "data_type": "float"
  },
  {
      "id": 34,
    "type_category_item_id": "profit_and_loss__ebit__profit_loss_from_discontinued_operation",
    "label": "Profit (loss) from discontinued operation",
    "data_type": "float"
  },
  {
      "id": 35,
    "type_category_item_id": "profit_and_loss__ebit__impairment_losses",
    "label": "Impairment losses",
    "data_type": "float"
  },
  {
      "id": 36,
    "type_category_item_id": "profit_and_loss__ebit__exceptional_items",
    "label": "Exceptional items",
    "data_type": "float"
  },
  {
      "id": 37,
    "type_category_item_id": "profit_and_loss__ebit__other_non_operating_items",
    "label": "Other non-operating items",
    "data_type": "float"
  },
  {
      "id": 38,
    "type_category_item_id": "profit_and_loss__ebit__ebit_after_non_operating_items",
    "label": "EBIT after Non-Operating Items",
    "data_type": "float",
    "is_label_bold": 1
  },
  {
      "id": 39,
    "type_category_item_id": "profit_and_loss__ebit__finance_expense",
    "label": "Finance expense",
    "data_type": "float"
  },
  {
      "id": 40,
    "type_category_item_id": "profit_and_loss__ebit__finance_income",
    "label": "Finance income",
    "data_type": "float"
  },
  {
      "id": 41,
    "type_category_item_id": "profit_and_loss__ebit__gains_losses_on_other_derivatives",
    "label": "Gains/(losses) on other derivatives",
    "data_type": "float"
  },
  {
      "id": 42,
    "type_category_item_id": "profit_and_loss__ebit__foreign_exchange_gain_loss",
    "label": "Foreign exchange gain/(loss)",
    "data_type": "float"
  },
  {
      "id": 43,
    "type_category_item_id": "profit_and_loss__ebit__other_financial_items",
    "label": "Other financial items",
    "data_type": "float"
  },
  {
      "id": 44,
    "type_category_item_id": "profit_and_loss__overall__profit_loss_before_tax",
    "label": "Profit/(Loss) before tax",
    "data_type": "float",
    "is_background_color_dark": 1
  },
  {
      "id": 45,
    "type_category_item_id": "profit_and_loss__overall__tax_expense_credit",
    "label": "Tax (expense) credit",
    "data_type": "float"
  },
  {
      "id": 46,
    "type_category_item_id": "profit_and_loss__overall__profit_loss_after_tax",
    "label": "Profit/(Loss) after tax",
    "data_type": "float",
    "is_background_color_dark": 1
  },
  {
      "id": 47,
    "type_category_item_id": "profit_and_loss__overall__minority_interest",
    "label": "Minority interest",
    "data_type": "float"
  },
  {
      "id": 48,
    "type_category_item_id": "profit_and_loss__overall__net_income_loss",
    "label": "Net Income/(Loss)",
    "data_type": "float",
    "is_background_color_dark": 1
  }
]

export const financial_statement_profit_and_loss =[
  {
   "id": 10,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 1,
   "line_item_other_value": "Pax Revenue 1",
   "value_in_usd": 4357.00,
   "value_in_reporting_currency": 12503.195832500001,
   "parent_comment_id": 1
  },
  {
   "id": 11,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 2,
   "line_item_other_value": "Pax Revenue 2",
   "value_in_usd": 5416.00,
   "value_in_reporting_currency": 12504.445832500001,
   "value_as_input": "=10000+3.556666",
   "parent_comment_id": 2
  },
  {
   "id": 12,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 3,
   "line_item_other_value": "Pax Revenue 3",
   "value_in_usd": 7031.00,
   "value_in_reporting_currency": 12505.695832500001,
   "parent_comment_id": 3
  },
  {
   "id": 13,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 4,
   "line_item_other_value": "Pax Revenue 4",
   "value_in_usd": 11298.00,
   "value_in_reporting_currency": 12506.945832500001,
   "parent_comment_id": 4
  },
  {
   "id": 14,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 5,
   "line_item_other_value": "Pax Revenue 5",
   "value_in_usd": 3988.00,
   "value_in_reporting_currency": 12508.195832500001,
   "parent_comment_id": 5
  },
  {
   "id": 15,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 6,
   "line_item_other_value": "Pax Revenue 6",
   "value_in_usd": 5207.00,
   "value_in_reporting_currency": 12509.445832500001,
   "parent_comment_id": 6
  },
  {
   "id": 16,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 7,
   "line_item_other_value": "Pax Revenue 7",
   "value_in_usd": 10008.556666,
   "value_in_reporting_currency": 12510.695832500001,
   "parent_comment_id": 7
  },
  {
   "id": 17,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__cargo_revenue",
   "value_in_usd": 35814.50,
   "value_in_reporting_currency": 27777777.5,
   "parent_comment_id": 8
  },
  {
   "id": 18,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__other_revenue",
   "line_item_other_index": 1,
   "line_item_other_value": "Other Revenue 1",
   "value_in_usd": 75.00,
   "value_in_reporting_currency": 12515.6875,
   "parent_comment_id": 9
  },
  {
   "id": 19,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__other_revenue",
   "line_item_other_index": 2,
   "line_item_other_value": "Other Revenue 2",
   "value_in_usd": -1990.00,
   "value_in_reporting_currency": 12528.1875,
   "parent_comment_id": 10
  },
  {
   "id": 20,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__other_revenue",
   "line_item_other_index": 3,
   "line_item_other_value": "Other Revenue 3",
   "value_in_usd": -1775.00,
   "value_in_reporting_currency": 12540.6875,
   "parent_comment_id": 11
  },
  {
   "id": 21,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__total_cargo_and_other_revenue",
   "value_in_usd": 45528.00,
   "value_in_reporting_currency": 27815362.062500004,
   "parent_comment_id": 12
  },
  {
   "id": 22,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__revenue__total_revenue",
   "value_in_usd": 22322328.546662003,
   "value_in_reporting_currency": 27902910.683327504,
   "parent_comment_id": 13
  },
  {
   "id": 23,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 1,
   "line_item_other_value": "Pax Revenue 1",
   "value_in_usd": 14333.00,
   "value_in_reporting_currency": 12503.195832500001,
   "parent_comment_id": 1
  },
  {
   "id": 24,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 2,
   "line_item_other_value": "Pax Revenue 2",
   "value_in_usd": 6149.00,
   "value_in_reporting_currency": 12504.445832500001,
   "value_as_input": "=10000+3.556666",
   "parent_comment_id": 2
  },
  {
   "id": 25,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 3,
   "line_item_other_value": "Pax Revenue 3",
   "value_in_usd":10488.00,
   "value_in_reporting_currency": 12505.695832500001,
   "parent_comment_id": 3
  },
  {
   "id": 26,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 4,
   "line_item_other_value": "Pax Revenue 4",
   "value_in_usd": 10571.00,
   "value_in_reporting_currency": 12506.945832500001,
   "parent_comment_id": 4
  },
  {
   "id": 27,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 5,
   "line_item_other_value": "Pax Revenue 5",
   "value_in_usd": 10571.00,
   "value_in_reporting_currency": 12508.195832500001,
   "parent_comment_id": 5
  },
  {
   "id": 28,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 6,
   "line_item_other_value": "Pax Revenue 6",
   "value_in_usd": 5152.00,
   "value_in_reporting_currency": 12509.445832500001,
   "parent_comment_id": 6
  },
  {
   "id": 29,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
   "line_item_other_index": 7,
   "line_item_other_value": "Pax Revenue 7",
   "value_in_usd": 3206.00,
   "value_in_reporting_currency": 12510.695832500001,
   "parent_comment_id": 7
  },
  {
   "id": 30,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__cargo_revenue",
   "value_in_usd": 30554.66,
   "value_in_reporting_currency": 27777777.5,
   "parent_comment_id": 8
  },
  {
   "id": 31,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__other_revenue",
   "line_item_other_index": 1,
   "line_item_other_value": "Other Revenue 1",
   "value_in_usd": 165.00,
   "value_in_reporting_currency": 12515.6875,
   "parent_comment_id": 9
  },
  {
   "id": 32,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__other_revenue",
   "line_item_other_index": 2,
   "line_item_other_value": "Other Revenue 2",
   "value_in_usd": -1799.00,
   "value_in_reporting_currency": 12528.1875,
   "parent_comment_id": 10
  },
  {
   "id": 33,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__other_revenue",
   "line_item_other_index": 3,
   "line_item_other_value": "Other Revenue 3",
   "value_in_usd": -6677.00,
   "value_in_reporting_currency": 12540.6875,
   "parent_comment_id": 11
  },
  {
   "id": 34,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__total_cargo_and_other_revenue",
   "value_in_usd": 22252289.650000002,
   "value_in_reporting_currency": 27815362.062500004,
   "parent_comment_id": 12
  },
  {
   "id": 35,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__revenue__total_revenue",
   "value_in_usd": 22322328.546662003,
   "value_in_reporting_currency": 27902910.683327504,
   "parent_comment_id": 13
  },
  {
   "id": 36,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__operating_expense",
   "value_in_usd": 98765.4321,
   "value_in_reporting_currency": 128395.06173000002,
   "parent_comment_id": 14
  },
  {
   "id": 37,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__employee_costs",
   "value_in_usd": 98765.4321,
   "value_in_reporting_currency": 128395.06173000002,
   "parent_comment_id": 15
  },
  {
   "id": 38,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__fuel_and_oil",
   "value_in_usd": 98765.4321,
   "value_in_reporting_currency": 128395.06173000002,
   "parent_comment_id": 16
  },
  {
   "id": 39,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__maintenance_materials_and_engineering",
   "value_in_usd": 98765.4321,
   "value_in_reporting_currency": 128395.06173000002,
   "parent_comment_id": 17
  },
  {
   "id": 40,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__landing_fees_en_route_and_other_variants",
   "line_item_other_index": 1,
   "line_item_other_value": "Test 1",
   "value_in_usd": 98765.4321,
   "value_in_reporting_currency": 128395.06173000002,
   "parent_comment_id": 18
  },
  {
   "id": 41,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__landing_fees_en_route_and_other_variants",
   "line_item_other_index": 2,
   "line_item_other_value": "Test 2",
   "value_in_usd": 98735.4321,
   "value_in_reporting_currency": 128356.06173000002,
   "parent_comment_id": 19
  },
  {
   "id": 42,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__selling_and_distribution_charges",
   "value_in_usd": 98705.4321,
   "value_in_reporting_currency": 128317.06173000002,
   "parent_comment_id": 20
  },
  {
   "id": 43,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__other_ebitdar_expenses",
   "value_in_usd": 98675.4321,
   "value_in_reporting_currency": 128278.06173000002,
   "parent_comment_id": 21
  },
  {
   "id": 44,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__other_operating_expenses",
   "line_item_other_index": 1,
   "line_item_other_value": "Other Operating Expense 1",
   "value_in_usd": 98645.4321,
   "value_in_reporting_currency": 128239.06173000002,
   "parent_comment_id": 22
  },
  {
   "id": 45,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__other_operating_expenses",
   "line_item_other_index": 2,
   "line_item_other_value": "Other Operating Expense 2",
   "value_in_usd": 98615.4321,
   "value_in_reporting_currency": 128200.06173000002,
   "parent_comment_id": 23
  },
  {
   "id": 46,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__other_operating_expenses",
   "line_item_other_index": 3,
   "line_item_other_value": "Other Operating Expense 3",
   "value_in_usd": 98585.4321,
   "value_in_reporting_currency": 128161.06173000002,
   "parent_comment_id": 24
  },
  {
   "id": 47,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__other_operating_expenses",
   "line_item_other_index": 4,
   "line_item_other_value": "Other Operating Expense 4",
   "value_in_usd": 98555.4321,
   "value_in_reporting_currency": 128122.06173000002,
   "parent_comment_id": 25
  },
  {
   "id": 48,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__total_ebitdar_expenses",
   "value_in_usd": 98525.4321,
   "value_in_reporting_currency": 128083.06173000002,
   "parent_comment_id": 26
  },
  {
   "id": 49,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__operating_expense__pct_inc_dec_to_previous_period",
   "value_in_usd": 98495.4321,
   "value_in_reporting_currency": 128044.06173000002,
   "parent_comment_id": 27
  },
  {
   "id": 50,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__ebitdar",
   "value_in_usd": 98465.4321,
   "value_in_reporting_currency": 128005.06173000002,
   "parent_comment_id": 28
  },
  {
   "id": 51,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__aircraft_rental_expense",
   "value_in_usd": 98435.4321,
   "value_in_reporting_currency": 127966.06173000002,
   "parent_comment_id": 29
  },
  {
   "id": 52,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__ebitda",
   "value_in_usd": 98405.4321,
   "value_in_reporting_currency": 127927.06173000002,
   "parent_comment_id": 30
  },
  {
   "id": 53,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__depreciation_and_amortisation",
   "value_in_usd": 98375.4321,
   "value_in_reporting_currency": 127888.06173000002,
   "parent_comment_id": 31
  },
  {
   "id": 54,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__ebit_before_non_operating_items",
   "value_in_usd": 98345.4321,
   "value_in_reporting_currency": 127849.06173000002,
   "parent_comment_id": 32
  },
  {
   "id": 55,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__dividends_and_share_of_profits_losses",
   "value_in_usd": 98315.4321,
   "value_in_reporting_currency": 127810.06173000002,
   "parent_comment_id": 33
  },
  {
   "id": 56,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__profit_loss_from_disposal_of_assets",
   "value_in_usd": 98285.4321,
   "value_in_reporting_currency": 127771.06173000002,
   "parent_comment_id": 34
  },
  {
   "id": 57,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__profit_loss_from_discontinued_operation",
   "value_in_usd": 98255.4321,
   "value_in_reporting_currency": 127732.06173000002,
   "parent_comment_id": 35
  },
  {
   "id": 58,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__impairment_losses",
   "value_in_usd": 98225.4321,
   "value_in_reporting_currency": 127693.06173000002,
   "parent_comment_id": 36
  },
  {
   "id": 59,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__exceptional_items",
   "value_in_usd": 98195.4321,
   "value_in_reporting_currency": 127654.06173000002,
   "parent_comment_id": 37
  },
  {
   "id": 60,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__other_non_operating_items",
   "value_in_usd": 98165.4321,
   "value_in_reporting_currency": 127615.06173000002,
   "parent_comment_id": 38
  },
  {
   "id": 61,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__ebit_after_non_operating_items",
   "value_in_usd": 98135.4321,
   "value_in_reporting_currency": 127576.06173000002,
   "parent_comment_id": 39
  },
  {
   "id": 62,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__finance_expense",
   "value_in_usd": 98105.4321,
   "value_in_reporting_currency": 127537.06173000002,
   "parent_comment_id": 40
  },
  {
   "id": 63,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__finance_income",
   "value_in_usd": 98075.4321,
   "value_in_reporting_currency": 127498.06173000002,
   "parent_comment_id": 41
  },
  {
   "id": 64,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__gains_losses_on_other_derivatives",
   "value_in_usd": 98045.4321,
   "value_in_reporting_currency": 127459.06173000002,
   "parent_comment_id": 42
  },
  {
   "id": 65,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__foreign_exchange_gain_loss",
   "value_in_usd": 98015.4321,
   "value_in_reporting_currency": 127420.06173000002,
   "parent_comment_id": 43
  },
  {
   "id": 66,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__ebit__other_financial_items",
   "value_in_usd": 97985.4321,
   "value_in_reporting_currency": 127381.06173000002,
   "parent_comment_id": 44
  },
  {
   "id": 68,
   "financial_statement_id": 2,
   "type_category_item_id": "profit_and_loss__overall__tax_expense_credit",
   "value_in_usd": 200000,
   "value_in_reporting_currency": 260000,
   "parent_comment_id": 45
  },
  {
   "id": 70,
   "financial_statement_id": 1,
   "type_category_item_id": "profit_and_loss__overall__minority_interest",
   "value_in_usd": 100000,
   "value_in_reporting_currency": 130000,
   "parent_comment_id": 46
  }
 ]
 

export const financial_statement_info =[
  {
    "id": 1,
    "counterparty_version_id": 1,
    "closing_date": "31-Dec-21",
    "generated_name": "31/12/2021 (12M)",
    "receipt_date": "31-Dec-21",
    "version_type": "Original",
    "type": "Annual",
    "consolidation_status": "Consolidated",
    "cashflow_method": "Direct cashflow",
    "accounting_standard": "IFRS",
    "lease_accounting": "IFRS16 Adj",
    "audit_method": "Audited",
    "reporting_currency": "HKD",
    "qualification": "Qualified",
    "auditor": "KPMG",
    "measurement": "Imperial",
    "is_approved": 1,
    "approved_counterparty_version_id": 1,
    "approved_approval_type": "Annual review",
    "approved_datetime": "30-Nov-21"
   },
   {
    "id": 2,
    "counterparty_version_id": 1,
    "closing_date": "31-Dec-22",
    "generated_name": "31/12/2022 (6M)",
    "receipt_date": "30-Jun-22",
    "version_type": "Original",
    "type": "Interim",
    "financial_statement_type_interim_length": 60,
    "consolidation_status": "Consolidated",
    "cashflow_method": "Indirect cashflow",
    "accounting_standard": "IFRS",
    "lease_accounting": "IFRS16 Adj",
    "audit_method": "Audited",
    "reporting_currency": "HKD",
    "qualification": "Qualified",
    "auditor": "KPMG",
    "measurement": "Imperial",
    "is_approved": 0,
    "approved_approval_type": "Indicative rating",
    "approved_datetime": "30-Nov-23"
   }
  ]

export const  financial_statement_attributes = [
  {
    "id": 1,
    "type_id": "general",
    "category_id": "general",
    "item_id": "type",
    "type_category_item_id": "general__general__type",
    "data_type": "string"
  },
  {
    "id": 2,
    "type_id": "general",
    "category_id": "general",
    "item_id": "consolidation_status",
    "type_category_item_id": "general__general__consolidation_status",
    "data_type": "string"
  },
  {
    "id": 3,
    "type_id": "general",
    "category_id": "general",
    "item_id": "accounting_standard",
    "type_category_item_id": "general__general__accounting_standard",
    "data_type": "string"
  },
  {
    "id": 4,
    "type_id": "general",
    "category_id": "general",
    "item_id": "lease_accounting",
    "type_category_item_id": "general__general__lease_accounting",
    "data_type": "string"
  },
  {
    "id": 5,
    "type_id": "general",
    "category_id": "general",
    "item_id": "audit_method",
    "type_category_item_id": "general__general__audit_method",
    "data_type": "string"
  },
  {
    "id": 6,
    "type_id": "general",
    "category_id": "general",
    "item_id": "reporting_currency",
    "type_category_item_id": "general__general__reporting_currency",
    "data_type": "string"
  },
  {
    "id": 7,
    "type_id": "general",
    "category_id": "general",
    "item_id": "fx_rate",
    "type_category_item_id": "general__general__fx_rate",
    "data_type": "float"
  },
  {
    "id": 8,
    "type_id": "general",
    "category_id": "general",
    "item_id": "qualification",
    "type_category_item_id": "general__general__qualification",
    "data_type": "string"
  },
  {
    "id": 9,
    "type_id": "general",
    "category_id": "general",
    "item_id": "auditor",
    "type_category_item_id": "general__general__auditor",
    "data_type": "string"
  },
  {
    "id": 10,
    "type_id": "profit_and_loss",
    "category_id": "revenue",
    "item_id": "revenue",
    "type_category_item_id": "profit_and_loss__revenue__revenue",
    "data_type": "float"
  },
  {
    "id": 11,
    "type_id": "profit_and_loss",
    "category_id": "revenue",
    "item_id": "pax_revenue",
    "type_category_item_id": "profit_and_loss__revenue__pax_revenue",
    "data_type": "float",
    "is_other": 1,
    "is_total": 1,
    "is_total_of": "profit_and_loss__revenue__pax_revenue__items"
  },
  {
    "id": 12,
    "type_id": "profit_and_loss",
    "category_id": "revenue",
    "item_id": "cargo_revenue",
    "type_category_item_id": "profit_and_loss__revenue__cargo_revenue",
    "data_type": "float"
  },
  {
    "id": 13,
    "type_id": "profit_and_loss",
    "category_id": "revenue",
    "item_id": "other_revenue",
    "type_category_item_id": "profit_and_loss__revenue__other_revenue",
    "data_type": "float",
    "is_other": 1,
    "is_total": 1,
    "is_total_of": "profit_and_loss__revenue__other_revenue__items"
  },
  {
    "id": 14,
    "type_id": "profit_and_loss",
    "category_id": "revenue",
    "item_id": "total_cargo_and_other_revenue",
    "type_category_item_id": "profit_and_loss__revenue__total_cargo_and_other_revenue",
    "data_type": "float",
    "is_total": 1,
    "is_total_of": "profit_and_loss__revenue__cargo_revenue\r\nprofit_and_loss__revenue__other_revenue"
  },
  {
    "id": 15,
    "type_id": "profit_and_loss",
    "category_id": "revenue",
    "item_id": "total_revenue",
    "type_category_item_id": "profit_and_loss__revenue__total_revenue",
    "data_type": "float",
    "is_total": 1,
    "is_total_of": "profit_and_loss__revenue__pax_revenue\r\nprofit_and_loss__revenue__total_cargo_and_other_revenue"
  },
  {
    "id": 16,
    "type_id": "profit_and_loss",
    "category_id": "revenue",
    "item_id": "pct_inc_dec_to_previous_period",
    "type_category_item_id": "profit_and_loss__revenue__pct_inc_dec_to_previous_period",
    "data_type": "percent",
    "is_pct_change": 1,
    "is_pct_change_of": "profit_and_loss__revenue__total_revenue"
  },
  {
    "id": 17,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "operating_expense",
    "type_category_item_id": "profit_and_loss__operating_expense__operating_expense",
    "data_type": "float"
  },
  {
    "id": 18,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "employee_costs",
    "type_category_item_id": "profit_and_loss__operating_expense__employee_costs",
    "data_type": "float"
  },
  {
    "id": 19,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "fuel_and_oil",
    "type_category_item_id": "profit_and_loss__operating_expense__fuel_and_oil",
    "data_type": "float"
  },
  {
    "id": 20,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "maintenance_materials_and_engineering",
    "type_category_item_id": "profit_and_loss__operating_expense__maintenance_materials_and_engineering",
    "data_type": "float"
  },
  {
    "id": 21,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "landing_fees_en_route_and_other_variants",
    "type_category_item_id": "profit_and_loss__operating_expense__landing_fees_en_route_and_other_variants",
    "data_type": "float"
  },
  {
    "id": 22,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "selling_and_distribution_charges",
    "type_category_item_id": "profit_and_loss__operating_expense__selling_and_distribution_charges",
    "data_type": "float"
  },
  {
    "id": 23,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "other_ebitdar_expenses",
    "type_category_item_id": "profit_and_loss__operating_expense__other_ebitdar_expenses",
    "data_type": "float",
    "is_other": 1,
    "is_total": 1,
    "is_total_of": "profit_and_loss__operating_expense__other_ebitdar_expenses__items"
  },
  {
    "id": 24,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "other_operating_expenses",
    "type_category_item_id": "profit_and_loss__operating_expense__other_operating_expenses",
    "data_type": "float",
    "is_other": 1,
    "is_total": 1,
    "is_total_of": "profit_and_loss__operating_expense__other_operating_expenses__items"
  },
  {
    "id": 25,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "total_ebitdar_expenses",
    "type_category_item_id": "profit_and_loss__operating_expense__total_ebitdar_expenses",
    "data_type": "float",
    "is_total": 1,
    "is_total_of": "profit_and_loss__operating_expense__employee_costs\r\nprofit_and_loss__operating_expense__fuel_and_oil\r\nprofit_and_loss__operating_expense__maintenance_materials_and_engineering\r\nprofit_and_loss__operating_expense__landing_fees_en_route_and_other_variants\r\nprofit_and_loss__operating_expense__selling_and_distribution_charges\r\nprofit_and_loss__operating_expense__other_ebitdar_expenses\r\nprofit_and_loss__operating_expense__other_operating_expenses"
  },
  {
    "id": 26,
    "type_id": "profit_and_loss",
    "category_id": "operating_expense",
    "item_id": "pct_inc_dec_to_previous_period",
    "type_category_item_id": "profit_and_loss__operating_expense__pct_inc_dec_to_previous_period",
    "data_type": "percent",
    "is_pct_change": 1,
    "is_pct_change_of": "profit_and_loss__operating_expense__total_ebitdar_expenses"
  },
  {
    "id": 27,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "ebitdar",
    "type_category_item_id": "profit_and_loss__ebit__ebitdar",
    "data_type": "float"
  },
  {
    "id": 28,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "aircraft_rental_expense",
    "type_category_item_id": "profit_and_loss__ebit__aircraft_rental_expense",
    "data_type": "float"
  },
  {
    "id": 29,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "ebitda",
    "type_category_item_id": "profit_and_loss__ebit__ebitda",
    "data_type": "float"
  },
  {
    "id": 30,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "depreciation_and_amortisation",
    "type_category_item_id": "profit_and_loss__ebit__depreciation_and_amortisation",
    "data_type": "float"
  },
  {
    "id": 31,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "ebit_before_non_operating_items",
    "type_category_item_id": "profit_and_loss__ebit__ebit_before_non_operating_items",
    "data_type": "float"
  },
  {
    "id": 32,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "dividends_and_share_of_profits_losses",
    "type_category_item_id": "profit_and_loss__ebit__dividends_and_share_of_profits_losses",
    "data_type": "float"
  },
  {
    "id": 33,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "profit_loss_from_disposal_of_assets",
    "type_category_item_id": "profit_and_loss__ebit__profit_loss_from_disposal_of_assets",
    "data_type": "float"
  },
  {
    "id": 34,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "profit_loss_from_discontinued_operation",
    "type_category_item_id": "profit_and_loss__ebit__profit_loss_from_discontinued_operation",
    "data_type": "float"
  },
  {
    "id": 35,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "impairment_losses",
    "type_category_item_id": "profit_and_loss__ebit__impairment_losses",
    "data_type": "float"
  },
  {
    "id": 36,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "exceptional_items",
    "type_category_item_id": "profit_and_loss__ebit__exceptional_items",
    "data_type": "float"
  },
  {
    "id": 37,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "other_non_operating_items",
    "type_category_item_id": "profit_and_loss__ebit__other_non_operating_items",
    "data_type": "float",
    "is_other": 1,
    "is_total": 1,
    "is_total_of": "profit_and_loss__ebit__other_non_operating_items__items"
  },
  {
    "id": 38,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "ebit_after_non_operating_items",
    "type_category_item_id": "profit_and_loss__ebit__ebit_after_non_operating_items",
    "data_type": "float"
  },
  {
    "id": 39,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "finance_expense",
    "type_category_item_id": "profit_and_loss__ebit__finance_expense",
    "data_type": "float"
  },
  {
    "id": 40,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "finance_income",
    "type_category_item_id": "profit_and_loss__ebit__finance_income",
    "data_type": "float"
  },
  {
    "id": 41,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "gains_losses_on_other_derivatives",
    "type_category_item_id": "profit_and_loss__ebit__gains_losses_on_other_derivatives",
    "data_type": "float"
  },
  {
    "id": 42,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "foreign_exchange_gain_loss",
    "type_category_item_id": "profit_and_loss__ebit__foreign_exchange_gain_loss",
    "data_type": "float"
  },
  {
    "id": 43,
    "type_id": "profit_and_loss",
    "category_id": "ebit",
    "item_id": "other_financial_items",
    "type_category_item_id": "profit_and_loss__ebit__other_financial_items",
    "data_type": "float",
    "is_other": 1,
    "is_total": 1,
    "is_total_of": "profit_and_loss__ebit__other_financial_items__items"
  },
  {
    "id": 44,
    "type_id": "profit_and_loss",
    "category_id": "overall",
    "item_id": "profit_loss_before_tax",
    "type_category_item_id": "profit_and_loss__overall__profit_loss_before_tax",
    "data_type": "float",
    "is_grand_total": 1,
    "is_grand_total_of": "profit_and_loss__ebit__ebit_after_non_operating_items\r\nprofit_and_loss__ebit__finance_expense\r\nprofit_and_loss__ebit__finance_income\r\nprofit_and_loss__ebit__gains_losses_on_other_derivatives\r\nprofit_and_loss__ebit__foreign_exchange_gain_loss\r\nprofit_and_loss__ebit__other_financial_items"
  },
  {
    "id": 45,
    "type_id": "profit_and_loss",
    "category_id": "overall",
    "item_id": "tax_expense_credit",
    "type_category_item_id": "profit_and_loss__overall__tax_expense_credit",
    "data_type": "float"
  },
  {
    "id": 46,
    "type_id": "profit_and_loss",
    "category_id": "overall",
    "item_id": "profit_loss_after_tax",
    "type_category_item_id": "profit_and_loss__overall__profit_loss_after_tax",
    "data_type": "float",
    "is_grand_total": 1,
    "is_grand_total_of": "profit_and_loss__overall__profit_loss_before_tax\r\nprofit_and_loss__overall__tax_expense_credit"
  },
  {
    "id": 47,
    "type_id": "profit_and_loss",
    "category_id": "overall",
    "item_id": "minority_interest",
    "type_category_item_id": "profit_and_loss__overall__minority_interest",
    "data_type": "float"
  },
  {
    "id": 48,
    "type_id": "profit_and_loss",
    "category_id": "overall",
    "item_id": "net_income_loss",
    "type_category_item_id": "profit_and_loss__overall__net_income_loss",
    "data_type": "float",
    "is_grand_total": 1,
    "is_grand_total_of": "profit_and_loss__overall__profit_loss_after_tax\r\n-profit_and_loss__overall__minority_interest"
  }
]


    

  
 






