package com.cinema.wasai.service;

import com.cinema.wasai.model.entiy.Seat;
import java.util.List;
import java.util.Map;

/**
 * 
 * SeatService业务逻辑操作接口类
 * 
 **/

public interface SeatService{


	//查询（根据主键ID查询）
	public Seat  selectByPrimaryKey (Integer id );
	//查询全部信息
	public List<Seat>  selectAllSeats ( );
	//条件查询信息
	public List<Seat>  selectSeatsByCondition (Seat record);
	//查询（获得数据表中的数量）
	public int selectSeatCount();
	//查询（根据 Map条件查询需要的结果）

	public int selectSeatsCountByCondition(Map<String,Object> map);

	//查询（通过Map条件，获得所有符合的信息）

	public List<Seat> selectSeatsCondition(Map<String,Object> map);
	//查询（通过Map条件进行分页查询）

	public List<Seat> selectSeatsPerPageByCondition(Map<String,Object> map);

	//删除（根据主键ID删除）
	public int deleteByPrimaryKey (Integer id );
	//删除（条件删除）
	public int deleteByCondition( Seat record );
	//添加
	public int insert( Seat record );
	//添加 （匹配有值的字段）
	public int insertSelective( Seat record );
	//修改 （匹配有值的字段）
	public int updateByPrimaryKeySelective( Seat record );
	//修改（根据主键ID修改）
	public int updateByPrimaryKey ( Seat record );
    //查询(通过AID查询所有信息)
	public List<Seat> selectByAid(int aid);
}