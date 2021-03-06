package com.cinema.wasai.service;

import com.cinema.wasai.model.entiy.LeavingMessage;
import java.util.List;
import java.util.Map;

/**
 * 
 * LeavingMessageService业务逻辑操作接口类
 * 
 **/

public interface LeavingMessageService{
	//查询全部信息（含员工方法）
	public List<LeavingMessage> selectAllLeavingMessagesAndUser();
	//查询（根据主键ID查询）
	public LeavingMessage  selectByPrimaryKey (Integer id );
	//查询全部信息
	public List<LeavingMessage>  selectAllLeavingMessages ( );
	//条件查询信息
	public List<LeavingMessage>  selectLeavingMessagesByCondition (LeavingMessage record);
	//查询（获得数据表中的数量）
	public int selectLeavingMessageCount();
	//查询（根据 Map条件查询需要的结果）

	public int selectLeavingMessagesCountByCondition(Map<String,Object> map);

	//查询（通过Map条件，获得所有符合的信息）

	public List<LeavingMessage> selectLeavingMessagesCondition(Map<String,Object> map);
	//查询（通过Map条件进行分页查询）

	public List<LeavingMessage> selectLeavingMessagesPerPageByCondition(Map<String,Object> map);

	//删除（根据主键ID删除）
	public int deleteByPrimaryKey (Integer id );
	//删除（条件删除）
	public int deleteByCondition( LeavingMessage record );
	//添加
	public int insert( LeavingMessage record );
	//添加 （匹配有值的字段）
	public int insertSelective( LeavingMessage record );
	//修改 （匹配有值的字段）
	public int updateByPrimaryKeySelective( LeavingMessage record );
	//修改（根据主键ID修改）
	public int updateByPrimaryKey ( LeavingMessage record );


}