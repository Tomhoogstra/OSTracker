cube(`Logs`, {
  sql: `SELECT * FROM ${process.env.CUBEJS_DB_NAME}.logs`,
  
  joins: {
    BotUsers: {
      sql: `${CUBE}.\`botUserID\` = ${BotUsers}.id`,
      relationship: `belongsTo`
    },
    
    Scripts: {
      sql: `${CUBE}.\`scriptID\` = ${Scripts}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    log: {
      sql: `log`,
      type: `string`
    },
    
    mirror: {
      sql: `mirror`,
      type: `string`
    },
    
    version: {
      sql: `version`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  }
});