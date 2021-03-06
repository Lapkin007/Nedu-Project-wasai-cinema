package com.cinema.wasai.mapper;

import com.cinema.wasai.model.entiy.Order;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.Map;
import java.util.List;

/**
 * 
 * OrderMapper数据库操作接口类
 * 
 **/
@Mapper
public interface OrderMapper{

	/**
	 *
	 * 查询（通过UID查询所有订单）
	 *
	 **/
	public List<Order> selectOrdersByUid(@Param("uid") Integer uid);
	/**
	 * 
	 * 查询（根据主键ID查询）
	 * 
	 **/
	Order  selectByPrimaryKey ( @Param("id") Integer id );
	/**
	 * 
	 * 查询（获得数据表中的数量）
	 * 
	 **/
	public int selectOrderCount();

	/**
	 * 
	 * 查询（根据其他条件查询需要的结果）
	 * 
	 **/
	public int selectOrdersCountByCondition(Map<String,Object> map);

	/**
	 * 
	 * 查询（通过Map条件进行分页查询）
	 * 
	 **/
	public List<Order> selectOrdersPerPageByCondition(Map<String,Object> map);

	/**
	 * 
	 * 查询（通过Map条件，获得所有符合的信息）
	 * 
	 **/
	public List<Order> selectOrdersCondition(Map<String,Object> map);

	/**
	 * 
	 * 查询全部信息
	 * 
	 **/
	public List<Order>  selectAllOrders ( );

	/**
	 * 
	 * 查询（根据实体类的条件查询）
	 * 
	 **/
	public List<Order> selectOrdersByCondition (Order record);

	/**
	 * 
	 * 删除（根据主键ID删除）
	 * 
	 **/
	public int deleteByPrimaryKey ( @Param("id") Integer id );

	/**
	 * 
	 * 删除（条件删除）
	 * 
	 **/
	public int deleteByCondition( Order record );

	/**
	 * 
	 * 添加
	 * 
	 **/
	public int insert( Order record );

	/**
	 * 
	 * 添加 （匹配有值的字段）
	 * 
	 **/
	public int insertSelective( Order record );

	/**
	 * 
	 * 修改 （匹配有值的字段）
	 * 
	 **/
	public int updateByPrimaryKeySelective( Order record );

	/**
	 * 
	 * 修改（根据主键ID修改）
	 * 
	 **/
	public int updateByPrimaryKey ( Order record );
	/**
	 *
	 * 修改 （匹配Aid有值的字段）
	 *
	 **/
	public int updateByAidSelective( Order record );
}