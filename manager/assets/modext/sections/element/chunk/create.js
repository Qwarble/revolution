/**
 * Loads the chunk create page
 * 
 * @class MODx.page.CreateChunk
 * @extends MODx.Component
 * @param {Object} config An object of config properties
 * @xtype modx-page-chunk-create
 */
MODx.page.CreateChunk = function(config) {
	config = config || {};	
	Ext.applyIf(config,{
		formpanel: 'modx-panel-chunk'
        ,actions: {
            'new': 'element/chunk/create'
            ,'edit': 'element/chunk/update'
            ,'cancel': 'welcome'
        }
        ,buttons: [{
            process: 'element/chunk/create'
            ,text: _('save')
            ,method: 'remote'
            ,checkDirty: true
            ,reload: true
            ,keys: [{
                key: MODx.config.keymap_save || 's'
                ,ctrl: true
            }]
        },'-',{
            process: 'welcome'
            ,text: _('cancel')
            ,params: {a:'welcome'}
        }/*,'-',{
            text: _('help_ex')
            ,handler: MODx.loadHelpPane
        }*/]
        ,components: [{
            xtype: 'modx-panel-chunk'
            ,renderTo: 'modx-panel-chunk-div'
            ,chunk: config.record.id || MODx.request.id
            ,record: config.record || {}
        }]
	});
	MODx.page.CreateChunk.superclass.constructor.call(this,config);
};
Ext.extend(MODx.page.CreateChunk,MODx.Component);
Ext.reg('modx-page-chunk-create',MODx.page.CreateChunk);