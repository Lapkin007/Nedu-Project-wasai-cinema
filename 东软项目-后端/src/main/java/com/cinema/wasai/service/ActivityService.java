package com.cinema.wasai.service;

import com.cinema.wasai.model.entiy.Activity;
import java.util.List;
import java.util.Map;

/**
 * 
 * ActivityService业务逻辑操作接口类
 * 
 **/

public interface ActivityService{


	//查询（根据主键ID查询）
	public Activity  selectByPrimaryKey (Integer id );
	//查询全部信息
	public List<Activity>  selectAllActivitys ( );
	//条件查询信息
	public List<Activity>  selectActivitysByCondition (Activity record);
	//查询（获得数据表中的数量）
	public int selectActivityCount();
	//查询（根据 Map条件查询需要的结果）

	public int selectActivitysCountByCondition(Map<String,Object> map);

	//查询（通过Map条件，获得所有符合的信息）

	public List<Activity> selectActivitysCondition(Map<String,Object> map);
	//查询（通过Map条件进行分页查询）

	public List<Activity> selectActivitysPerPageByCondition(Map<String,Object> map);

	//删除（根据主键ID删除）
	public int deleteByPrimaryKey (Integer id );
	//删除（条件删除）
	public int deleteByCondition( Activity record );
	//添加
	public int insert( Activity record );
	//添加 （匹配有值的字段）
	public int insertSelective( Activity record );
	//修改 （匹配有值的字段）
	public int updateByPrimaryKeySelective( Activity record );
	//修改（根据主键ID修改）
	public int updateByPrimaryKey ( Activity record );

}